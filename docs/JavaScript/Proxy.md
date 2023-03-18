## 手写 Promise

实现一个 Promise

```js
class Promise {
    static #PENDING = 'pending'
    static #FULFILLED = 'fulfilled'
    static #REJECTED = 'rejected'
    constructor(executor) {
        // executor 必须是个函数
        if (typeof executor !== 'function') {
            throw new TypeError('resolver must be a function')
        }
        this.status = Promise.#PENDING
        this.value = undefined
        this.onResolveCallback = []
        this.onRejectCallback = []
        const resolve = val => {
            if (this.status === Promise.#PENDING) {
                // 这里的判断其实不应该判断是否为 Promise 的实例
                // 而是应该判断是否为 thenable 的 “鸭子类型”
                if (typeof val?.then === 'function' && Object.getOwnPropertyNames(val).includes('then')) {
                    // if (val instanceof Promise) {
                    val.then(data => resolve(data), err => reject(err))
                    return
                }
                this.status = Promise.#FULFILLED
                this.value = val
                this.onResolveCallback.forEach(callback => callback())
            }
        }
        const reject = err => {
            if (this.status === Promise.#PENDING) {
                this.status = Promise.#REJECTED
                this.value = err
                this.onResolveCallback.forEach(callback => callback())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFulfill, onReject) {
        // 链式调用
        return new Promise((resolve, reject) => {
            switch (this.status) {
                case Promise.#FULFILLED:
                    // 用 marco task 模拟 micro task
                    // 要判断onFulfill 是否为函数，同时，抛出错误时reject
                    setTimeout(() => {
                        if (typeof onFulfill !== 'function') {
                            resolve(this.value)
                        } else {
                            try {
                                resolve(onFulfill(this.value))
                            } catch (e) {
                                reject(e)
                            }
                        }
                    })
                    break
                // 后面这里同理 判断传入的参数是否为函数
                case Promise.#REJECTED:
                    setTimeout(() => resolve(onReject(this.value)))
                    break
                case Promise.#PENDING:
                    this.onResolveCallback.push(() => {
                        setTimeout(() => { resolve(onFulfill(this.value)) })
                    })
                    this.onRejectCallback.push(() => {
                        setTimeout(() => { resolve(onReject(this.value)) })
                    })
                    break
            }
        })
    }
}
```

通过手写 Promise，更加深刻地体会**控制反转**的意义。我认为，使用回调编写异步代码，会产生”回调地狱“，正是因为我们必须把 **接下来作什么** （continuation）一次性告诉第三方。不把 continuation 传给第三方，而是使用**第三方的能力**，声明式地编写接下来做什么，这种编程范式，就是 Promise ——期约。

>这里提到的第三方的能力，既是 `resolve`，`reject` 这种能够决议一个期约的能力，也是 `then(onFulfill, onReject)` 这种承诺会帮我们在状态发生改变后调用对应的处理函数的能力。这样一来，我们既可以决定何时做（何时决议）也可以决定做什么（onFulfill、onReject 对应的处理函数）


## 异步

```js
async function sleep(time) {
    await new Promise(resoleve => setTimeout(resoleve, time));
}

sleep(1000).then(() => console.log('1'))
```


## Promise 有关

- 手写 retry 函数

```js
function retry(fn, times, delay) {
    return new Promise((resolve, reject) => {
        const attempt = () => {
            if (times === 0) {
                reject('tried enough times')
            } else {
                fn().then(res => {
                    resolve(res)
                }).catch(() => {
                    times--
                    settimeout(attempt, delay)
                })
            }
        }
    })
}
```

- `Promise#finally` 坑点

  - 不能获得 promise 的结果 （这也非常符合逻辑，一旦 Promise 在 `Promise#then` 中**被决议** 就无需也不能在 `Promise#finally` 再次修改 

  ```js
  Promise.resolve(1).finally(res=>console.log(res)) // undefined
  ```

  - 可以抛出错误，让下一轮的拒绝态接收

  ```js
  Promise.resolve(1).finally(() => {
      throw 'oops'
  }).then(undefined, rej => {
      console.log(rej, 'onrejected')
  })
  ```


### 使用 Proxy 检测数组

```js
function foo(obj) {
    let p = new Proxy(obj, {
        get(...args) {
            console.log(`hhh`)
            // 这里推荐不要使用 arguments 数组 因为其已被移出web标准
            // 推荐使用 rest parameter 和 spread operator
            return Reflect.get(...args)
        }
    })
    return p
}
const f = foo([1, 2, 3])
console.log(f[0]) // 'hhh' 1
```
