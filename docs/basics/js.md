# JavaScript

## 作用域链

**作用域**是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。

**作用域链**是当可执行代码内部访问变量时，会先查找本地作用域，如果找到目标变量即返回，否则会去父级作用域继续查找...一直找到全局作用域。

## 垃圾回收

当一个值，在内存中失去引用时，垃圾回收机制会根据特殊的算法找到它，并将其回收，释放内存。

- 标记清理
  - 标记阶段：从根对象遍历、可访问的对象被标识为可到达。
  - 清除阶段：从堆内存中线性遍历，如果有对象未被标志可到达，回收该对象的内存。
  - 缺点：垃圾回收可能导致大量的**内存碎片**
- 引用计数
  - 引用计数跟踪记录每个值被引用的次数，如果没有引用指向该对象，回收该对象。
  - 缺点：循环引用没法回收

## 异步

```js
async function sleep(time) {
    await new Promise(resoleve => setTimeout(resoleve, time));
}

sleep(1000).then(() => console.log('1'))
```



## 闭包

>闭包指有权访问另一个函数作用域中的变量的函数 — js高程
>
>当函数可以记住并访问所在的词法作用域时，就产生了闭包。即使函数是在当前词法作用域之外执行—你不知道的js
>
>我认为后者更对，因为全局作用域中的变量被引用也应当是产生了闭包

- 设计私有的方法和变量（谈防抖和节流）
- 构建命名空间，以减少全局变量的使用，从而使用闭包模块化代码，减少全局变量的污染（IIFE 立即调用函数表达式去构建模块）

缺点：会导致函数的变量一直保存在内存中，过多的闭包可能会导致内存泄漏（垃圾回收机制：标记清理、引用计数）

## 防抖和节流

如果我们将可能引起事件多次触发的时间段称为高频时间，防抖器的作用是在高频时间后触发，只触发一次，例如 input 框改变后搜索，我们可能只希望用户结束输入时才请求，以此节约请求数量、所以它被称为节流器。（当然也不止是这一种场景，例如window.resize 我们可能更关注结束后窗口的大小，这里节约的是js引擎的执行能力）。防抖是在高频时间内一段时间间隔内只触发一次，降低事件的发生频率。例如直播时鼠标点赞的动画，用户可能一直点击，但是我们可不希望每次点击都触发动画。

```js
var debounce = function(delay, cb) {
    var timer;
    return function() {
        if (timer) clearTimeout(timer);
        timer = setTimeout(function() {
            cb();
        }, delay);
    }
}

var throttle = function(delay, cb) {
    var startTime = Date.now();
    return function() {
        var currTime = Date.now();
        if (currTime - startTime > delay) {
            cb();
            startTime = currTime;
        }
    }
}
```

## 原型链

在Javascript中，函数也是对象，因此构造函数中有个prototype指针指向原型对象，而原型对象也有个指针constructor指回构造函数。通过构造函数实例化的对象，有个 \_\_proto\_\_ 属性指向其构造函数的原型，也即原型对象。Javascript中是没有类这个概念的，虽然es6提供了class关键字，但是其原理也是通过寄生组合继承，利用原型链实现继承的效果。

![img](https://yanhaijing.com/blog/549.png)

## 继承

原型链继承、盗用构造函数继承、组合继承、原型式继承、寄生式继承、寄生组合继承、类

|          | 原型链                                           | 盗用构造函数                                                 | 组合                                     | 原型式        | 寄生式       | 寄生组合 | 类   |
| -------- | ------------------------------------------------ | ------------------------------------------------------------ | ---------------------------------------- | ------------- | ------------ | -------- | ---- |
| 方法     | 无法向父类的构造函数传递参数                     |                                                              |                                          |               |              |          |      |
| 属性     | 引用类型的属性会被上升为原型属性在所有实例间共享 |                                                              |                                          |               |              |          |      |
| 类型检测 |                                                  | 类型检测不是父类实例                                         |                                          |               |              |          |      |
| 备注     |                                                  | 中断了原型链，子类的实例化对象拿不到父类原型上定义的方法和属性 | 存在效率问题，父类的构造函数会被调用两次 | Object.create | 创建增强返回 |          |      |



## `this` 指向问题

`this` 既不指向函数自身也不指向函数的词法作用域，`this` 实际上是在函数调用时发生的绑定，它完全取决于函数在哪里被调用。遵循以下四个规则

- 由 `new` 调用 ？绑定到新创建的对象
- 由 `call` 或者 `apply` （或者 `bind` ）调用？ 绑定到指定的对象
- 由 上下文对象调用 ？ 绑定到那个上下文对象
- 默认 ：在严格模式下绑定到 `undefined` ，否则绑定到全局对象 

## `new` 关键字作用

- 创建一个空对象
- 绑定原型链，也就是将创建的新对象的 `__proto__` 指向构造函数的原型
- 将构造函数中的 `this` 指向空对象
- 如构造函数没有返回值，或者返回值不是一个对象，那么返回该空对象，若有返回值，正常返回

## 手写 bind 函数

了解 `this` 和 `new` 操作符之后，我们可以写出如何实现一个 `bind` 函数

``` js {7}
Function.prototype._bind = function (context, ...args) {
    let fn = this
    if (typeof fn !== 'function') {
        throw new Error('must be called by a function')
    }
    return function newFn(...newArgs) {
        if (this instanceof newFn) {
            return new fn(...args, ...newArgs)
        }
        return fn.call(context, ...args, ...newArgs)
    }
}
```

如高亮代码所示，重点在于判断是否是`构造函数调用`。判断是否为`构造函数调用`的代码 （参考 《你不知道的 Javascript》）十分复杂晦涩，但是这么写属实是妙不可言。

## 类型

八个，`Undefined` `null`  `number`  `boolean`  `object`  `symbol`  `bigint` 

## 数组能够改变自身的方法

`pop` `push` `shift` `unshift` `sort` `reverse` `splice` 

## 数组方法中能够中断的

forEach不能终端循环，故可以使用for 或者 数组方法

- every 有一个return falsy 就会中断循环 返回真假
- some 有一个return true 就会中断循环 返回真假
- find 找到就终端 返回元素或者undefined
- findIndex 返回索引 返回元素索引



## 函数调用过程

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

  - 不能获得 promise的结果 （这也非常符合逻辑，一旦 Promise 在 `Promise#then` 中**被决议** 就无需也不能在 `Promise#finally` 再次修改 

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
