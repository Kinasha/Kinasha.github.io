# CSS

## 纯 CSS 实现气泡动效
>[预览地址](https://codesandbox.io/s/sparkling-hooks-9xopgi?file=/index.html)

使用自定义变量 （--scale，--translate-left等）将 transform 属性解耦。因为 transform 属性并非 **简写属性** ，不能像背景（background）一样拆分成多个独立的属性。（浏览器支持中）。

如果想要每次变化的值是随机数，可以添加一个 raf 的定时器，将 offset 作为变量，每次绘制时随机产生，只要保持关键帧（归位）即可。

## 继承样式

- font
- visibility
- line-height

>注意： background 和 opacity 不是继承属性

## position （定位）常用属性值

- **static**
  - 元素在文档流中定位的默认值
- **relative**
  - 相对定位（相对于**自己**在文档流中本来的位置）

- **absolute**
  - 绝对定位（被移出文档流，相对于第一个`非 static` 定位的祖先元素定位）
- **fixed**
  - 固定定位（默认情况相对于视口进行定位，当元素的祖先元素的 `transform`, `perspective` 或 `filter` 属性非 `none` 时，容器由视口改为该祖先。）
- **sticky**
  - 粘性定位（可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位）
  - 一般用来做吸顶的效果
  - 阈值 有上、右、下、左四种

## display （布局）常用属性值

| inline                                         | block                                        | inline-block               |
| ---------------------------------------------- | -------------------------------------------- | -------------------------- |
| 共享一行<br />内容撑开<br />margin只有左右生效 | 独占一行<br />可设置宽高<br />默认填满父元素 | 共享一行<br />可设置宽高   |
| span<br />em<br />label<br />a                 | div<br />h1-h6<br />li nav                   | button<br />input<br />img |

其实如果面试官问这个问题，他最想听到的是 `flex` 和 `grid` 布局，由于这两者十分重要，下文专门介绍。




## grid布局

<a target='blank' href='https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html'>阮一峰的网格布局教程</a>

## 垂直水平居中

最简单的方法：display:flex（父） margin: auto（子）

最优的方法：grid justify-items align-items center

- 水平居中
  - 行内元素：父元素 text-align : center
  - 块级元素
    - 确定宽度：
      - margin：0 auto；
      - 子绝父相，计算margin-left  （使用`calc(50% - width/2)` ）
      - 子绝父相，transformX
    - 未知宽度：
      - grid 布局 justify-content 或者 justify-items
      - flex布局 justify-content 或者 justify-items（着重讲一下content 和 items的区别）
- 垂直居中
  - 文本：line-height = height
  - 同上 align-items