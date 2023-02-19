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
