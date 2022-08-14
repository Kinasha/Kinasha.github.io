# CSS

## 选择器

- 元素选择器 如 `div`

- 群组选择器 如 `h2,p`

- 通配符选择器 `*`  

- 类选择器 `.className`

- ID选择器 `#ID`

- 属性选择器 `[color='black']`

  - [foo|=‘bar’] 命中 foo 属性的值以 `bar` 或者`bar-`开头
  - [foo~=‘bar’] 命中 foo 属性的值包含 `bar` 这个 `词` 
  - [foo*=‘bar’] 命中 foo 属性的值包含 `bar` 这个 `子串`
  - [foo^=‘bar’] 命中 foo 属性的值以 `bar` 开头
  - [foo$=‘bar’] 命中 foo 属性的值以 `bar` 结尾

- 后代选择器 `h2 em`

  - 子元素选择器 `h2>em` 子元素可以视作后代的特殊情况

- 同胞选择器

  - 紧邻同胞 `h2 + p`
  - 后续同胞 `h2 ~ p`

- 伪类选择器 `a:hover`

  - 伪类始终指代所依附的元素

    >p:first-child
    >
    >第一个段落
    >
    >p>:first-child
    >
    >段落里的第一个子元素

  - 一个有意思的 :not() 否定伪类 

- 伪元素选择器 `p::first-line`

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



## flex布局

>容器：用来开启 flex 布局的父元素
>
>项目：开启了flex 布局的容器中的子元素

主要是六个容器属性、六个项目属性

### 容器属性

- flex-direction

  - 可选值：**row** | row-reverse | column | column-reverse
  - 决定 `主轴` 的方向，或者说放置项目的方式，如果是 `row` 就像个正常人，一行一行地放；如果是 `column` 就像玩小猫钓鱼 ，一列一列地放。

- flex-wrap

  - 可选值： **nowrap** | wrap | wrap-reverse
  - 决定容器内项目是否可以换行。`nowrap` 可能会导致项目溢出容器或被压缩；`wrap` 正常换行；`wrap-reverse` 从 `交叉轴` 的末端开始放置容器，正常换行。*注意：`nowrap` 中间没有 `-`*

- flex-flow

  - flex-direction 和 flex-wrap 的缩写形式

- justify-content

  - 可选值：**flex-start** | flex-end | center | space-around | space-between| space-evenly 
  - 项目在`主轴`上的对齐方式，可以理解成就是左对齐、右对齐、水平居中。
  - `space-around` ：每个项目左右两边距离相等（中间缝隙是两边缝隙的两倍）
  - `space-between`： 每**两个项目之间**距离相等（只有中间缝隙，两边缝隙为零）
  - `space-evenly`：项目之间缝隙相等（中间缝隙等于两边缝隙）

  >注意：在弹性盒子布局中，justify-items 属性会被忽略

- align-content

  - 可选值：**flex-start** | flex-end | center | space-around | space-between | space-evenly
  - 项目在`交叉轴`上的对齐方式，可以理解成上对齐、下对齐、垂直居中。

- align-items

  - 设定 项目 align-self  属性的默认值 但是实际上并不太用得上
  - 只能在弹性盒子和网格盒子中使用
  - 再次强调 在弹性盒子布局中，justify-items 属性会被忽略

### 项目属性

- order
  - 可选值：数字  默认是 `0`
  - 数值越小，越排在主轴方向（默认从左到右）的前面
- flex-grow
  - 可选值 ：数值 默认是`0`
  - 如何处理主轴上剩余空间
- flex-shrink
  - 如何处理主轴上溢出空间
- flex-basis
  - 项目占据主轴的空间，优先级高于设置的 `width` 属性
- flex
  - `flex-grow` `flex-shrink` 和 `flex-basis` 的缩写
  -  单值语法：
    - 无单位数字：视作 `flex：<number> 1 0 `  即 传入值被视作 `flex-grow` 同时`flex-shrink` 被假定为 1，`flex-basis` 被假定为 0
    - 有效宽度：被视作 `flex-basis` 的值 `flex-grow` 和 `flex-shrink` 都为 1 
    - 关键字：auto、 initial
  - 双值语法：第一个数字必须为无单位数，它会被视作是 `flex-grow` 的值。第二个数根据是否无单位数被视作 `flex-shrink` 或者 `flex-basis`
  - 三值语法：分别对应 `flex-grow` `flex-shrink` 和 `flex-basis` 
- align-self
  - 可选值 ：**auto** | flex-start | flex-end | center | baseline | stretch
  - 允许某个项目在交叉轴上有独特的定位方式，可以覆盖 `align-items` 设置的默认值

## 手写一个左侧定宽右侧撑满的布局

```html{17}
<div id="wrapper">
        <div id="left"></div>
        <div id="right"></div>
</div>
<style>
    #wrapper {
        display: flex;
        height: 100vh;
    }

    #left {
        width: 300px;
        background-color: #158bb8;
    }

    #right {
        flex-grow: 1;
        background-color: #1491a8;
    }
</style>
```



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
      - grid 布局 jutstify-content 或者 justify-items
      - flex布局 jutstify-content 或者 justify-items（着重讲一下content 和 items的区别）
- 垂直居中
  - 文本：line-height = height
  - 同上 align-items