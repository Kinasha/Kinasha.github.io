# HTML

## HTML解析

我们知道，HTML最终会被解析成为 DOM ，那么在 HTML 解析的过程中，如何控制与JS、CSS的加载、解析顺序呢

### 与JS的加载、解析顺序

- 默认情况下，JS会阻塞 HTML 的解析（这很好理解，如果JS修改了DOM后续的解析也没有意义）
- 使用 `async` 异步**加载** JS 、然后解析JS
- 使用 `defer` 异步加载JS、HTML 解析完成后（DOMContentLoaded 阶段）解析JS

<img src='https://image-static.segmentfault.com/215/179/2151798436-59da4801c6772_articlex' />

>上面我们提到了，defer 执行的时机是 DOMContentLoaded 时间阶段、它常见Load 时间阶段的区别是什么呢？
>
>`DomContentLoaded`：HTML 文档解析完成
>
>`Load` ： 所有资源解析完成，包括文档、图片、样式表、脚本等资源
>
>在 Chrome 的 network 选项卡中我们可以看到， 蓝色的竖线表示`DOMContentLoaded`的时间点，红色的竖线表示`Load`的时间点，`Load`耗时总是大于等于前者的。



## 元素拖拽

```html
<body>
    <div id="container" style="width: 200px;height: 200px;background-color: grey;"></div>
    <div id="el" style="width:50px;height: 50px;background-color: deepskyblue;"></div>
    <script>
        const container = document.querySelector('#container')
        const el = document.querySelector('#el')
        // 鼠标拖拽时有元素跟随
        el.setAttribute('draggable', true)
        // 鼠标拖动的默认禁止符号被取消
        container.addEventListener('dragover', e => {
            e.preventDefault()
        })
        // 放置后将元素放进 container
        container.addEventListener('drop', e => {
            e.target.appendChild(el)
        })
    </script>
</body>
```



## 标签语义化

- 语义化标签包含：header  footer nav main article section aside 
- 通过使用语义化的标签创建合理的页面结构，而不是滥用div
  - 开发角度：代码结构清晰、易于阅读，方便后续开发和维护
  - 可用性角度：方便其他设备解析，如屏幕阅读器
  - 推广角度：有利于SEO（搜索引擎会根据不同标签分配权重）

## 重绘、重排

回流：当DOM的变化影响了元素的几何信息（DOM对象的位置、尺寸大小），浏览器需要重新计算元素的几何属性，将其安放在界面的正确位置。

- 添加、删除DOM元素
- 元素的尺寸改变（边距、填充、边框、宽度、高度）

重绘：当一个元素的外观发生变化，但没有改变布局，重新绘制的过程。

- 改变元素 color background box-shadow等属性

优化建议

- 缓存读取操作
- 养生集中修改

- 一次创建好再append



## HTML元素的CORS配置属性

在媒体元素上被使用的 `crossorigin` 内容属性是一个 CORS 设置属性。

