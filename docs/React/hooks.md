## useState
```js
const [state, setState] = useState(initialState)
```
最常用的 hook ，但是有两个注意点
1. 如果你向 initialState 传递一个函数，它会被视作是初始化函数，react 会调用这个函数，并且将这个函数的返回值作为初始状态。初始函数应当是一个纯函数（它应当没有任何参数，而且应当**幂等**），为了保证你的不会制造出 `accidential impurities` 。
2. react 会在严格模式下将这个 Initializer 调用两次。

## useEffect
```js
useEffect(setup, dependencies?)
```
第二常用的 hook，用于在 「自变量发生变化」后触发副作用。
useEffect 常用于组件首次挂载时需要发请求。（此时，Dependencies 为空数组）
在 setup 中可以返回一个函数，称之为 cleanup 函数。react 会在组件从 DOM 中 removed 之后调用 cleanup 函数。

## useRef
```js
const ref = useRef(initialValue)
```
useRef 常用于操作 DOM
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24686000045/6f64/a8c0/368c/c1cf8b8128270b71abce2f14d4b4dcc3.png)

## useContext
```js
const value = useContext(SomeContext)
```
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24686371069/09ae/c227/c8ac/929fd904eff3ad1bb4fcb69538c08ebd.png)

useContext 是 context comsumer 的简写，同时，可以将其进一步简化，从而得到 useMode 之类的。

## useReducer
```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24686798408/ec87/3061/db15/874077695cc416c8d5df06923f583f9a.png)

## useMemo
useMemo 用于在重渲染之间保存计算结果，这个计算结果（calculateValue）通常是耗时的计算函数。（如下图，calculateValue 的返回值，才是实际要 memorized 的值，也就是 cachedValue）
```js
const cachedValue = useMemo(calculateValue, dependencies)
```
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24714023944/c7dd/14ff/d2a4/000bbc4e8ca8275905d49e0fa90668bd.png)

注意和 memo 区分

```js
const MemoizedComponent = memo(SomeComponent, arePropsEqual?)
```

memo 的实际使用场景是：当父组件自身的 state 发生变化，此时父组件会发生重渲染，父组件的重渲染会带动子组价发生重渲染。如果我们并不希望此时子组件发生重渲染，那么可以使用 memo 包裹一下子组件。
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24786292394/bd03/ffef/ff71/021752f3ac54ade66c2bb64614816e0a.png)


## useCallback
useCallback 用于在重渲染之间缓存函数定义
```js
const cachedFn = useCallback(fn, dependencies)
```

有关 useMemo useCallback 和 memo 之间的正确使用姿势，我学习了[这篇文章](https://juejin.cn/post/7146107198215553055)
useCallback 是 useMemo 的语法糖。
```js
const foo = useMemo(()=>()=>doSomething(),[deps])
// 等价于
const foo = useCallback(()=>doSomething(),[deps])
```


## useImperativeHandler
用来定制传入 ref 的行为，最常见的例子是，点击编辑的时候，输入框获得焦点（focused）。

![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24786725220/69d3/1e2b/9318/16799c462f90b19c1313e6a83bb72577.png)

## useLayoutEffect
在每次浏览器重绘时触发的 hook ，对于性能有伤害。
典型的例子是：实现当 tooltip 不能在上方被放下时，放到下面。
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/24786996940/f37b/9e52/62f3/a97b0bb8688267c489221791c33016dc.png)
而且尽量使用 useEffect 代替

## useDebugValue

用于在 react devtool 上展示信息，暂不展开
