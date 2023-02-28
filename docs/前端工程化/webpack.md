## plugin

webpack 中的插件（plugins）指的是具有 apply 方法的一个类。

```js

class MyPlugin{
    constructor(){

    }
    apply(compiler){
        console.log('hello webpack')
    }
}
```

![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25041563135/99b5/bb3f/76da/db03de0b114016cda6653c99a980a58a.png)

其中 `compiler` 上面定义了诸多 hook 例如 beforeRun  run 等，[查看全部钩子](https://webpack.docschina.org/api/compiler-hooks/#root)

使用上述方式组织项目，有如下三个问题：
- 当脚本依赖于第三方库的时候，并不能直观地显示出来
- 当依赖缺失，或者顺序不对，程序无法正常运行
- 当无关的依赖被声明，浏览器不得不下载额外的代码

## 创建 bundle


## 生产模式

Mode =  development

Source Map  

为避免每次都要执行 npm run build 命令，webpack 提供了三种解决思路

- Webpack watch mode
- Webpack-dev-server
- Webpack-dev-middleware


> `webpack-dev-server` 会从 [`output.path`](https://webpack.docschina.org/configuration/output/#outputpath) 中定义的目录中的 bundle 文件提供服务，即文件将可以通过 `http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]` 进行访问。

- Safe write 可能会导致问题

## 代码分割

- 常用的代码分割方法
	- 入口起点
	- 防止重复
	- 动态导入

### 动态导入


### 预获取、预加载模块

- 预获取 prefetch ： 将来某个导航需要的资源
- 预加载 preload： 当下可能需要的资源 （更紧急）

不正确地使用 `webpackPreload` 会有损性能

###  bundle 分析

-   [webpack-chart](https://alexkuz.github.io/webpack-chart/): webpack stats 可交互饼图。
-   [webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/): 可视化并分析你的 bundle，检查哪些模块占用空间，哪些可能是重复使用的。
-   [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)：一个 plugin 和 CLI 工具，它将 bundle 内容展示为一个便捷的、交互式、可缩放的树状图形式。
-   [webpack bundle optimize helper](https://webpack.jakoblind.no/optimize)：这个工具会分析你的 bundle，并提供可操作的改进措施，以减少 bundle 的大小。
-   [bundle-stats](https://github.com/bundle-stats/bundle-stats)：生成一个 bundle 报告（bundle 大小、资源、模块），并比较不同构建之间的结果。


## 懒加载

## 缓存

### 输出文件的文件名

 webpack 采用一种被称为 `substitution` 可替换模版字符串的方式，来创建文件名称

### 提取引导模版 （extracting boilerplate）

通过将第三方库提取到单独的 vendor 

```
optimization: {
     runtimeChunk: 'single',
   },
```
 
### 模块标识符



## 创建 Library 

### Expose the Library

### 外部化 

通过 externals 排除

不想加入到打包结果的依赖
- One by one
- 正则





## 环境变量

区分生产环境和开发环境，

## 构建性能

### 通用环境
- 更新到最新版本
- Loader 只用于必要的模块
- 尽量减少使用 loader
- 解析（代码细节）
- Dll
- 小即是快
- Worker 池
- 自定义 plugin
### 开发环境

- 增量编译 --watch
- 在内存中编译
- Stats. ToJson 加速
- Devtool 
- 避免在生产环境下才会用到的工具
	-   `TerserPlugin`
	-   `[fullhash]` / `[chunkhash]` / `[contenthash]`
	-   `AggressiveSplittingPlugin`
	-   `AggressiveMergingPlugin`
	-   `ModuleConcatenationPlugin`
- 最小化 entry chunk
- 避免额外的优化步骤
- 输出结果不携带路径信息
- Node （8.9.10 - 9.11.1）的 Map Set 有性能回退
- Ts-loader 的 transpile only

### 生产环境

- SourceMap
- 某些工具存在降低构建性能的问题
	- Babel 最小化 preset 、plugin 的数量
	- TS  配置 loader
	- Sass 中的 bug

## 内容安全策略

- 启用 CSP

## 开发 Vagrant


## 依赖管理

- 带表达式的 require 的语句
- Require. Context
	- Context module API

## 安装

## 模块热替换

## Tree Shaking

## 生产环境

## 懒加载

## ECMAScript 模块

## 预置模块

（怎么做 polyfill）

## TypeScript

## Web Worker

## PWA

## Public Path

## 集成

## 资源模块

## Entry 高级用法

## Package exports
