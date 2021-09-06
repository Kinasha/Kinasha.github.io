# CSS
## display常用属性值

| inline                                         | block                                        | inline-block               |
| ---------------------------------------------- | -------------------------------------------- | -------------------------- |
| 共享一行<br />内容撑开<br />margin只有左右生效 | 独占一行<br />可设置宽高<br />默认填满父元素 | 共享一行<br />可设置宽高   |
| span<br />em<br />label<br />a                 | div<br />h1-h6<br />li nav                   | button<br />input<br />img |



## flex布局和grid布局

| flex-direction                                               | flex-wrap                                                   | flex-flow             | justify-content                                              | align-items                                     | align-content                                                |
| ------------------------------------------------------------ | ----------------------------------------------------------- | --------------------- | ------------------------------------------------------------ | ----------------------------------------------- | ------------------------------------------------------------ |
| row\|row-reverse\|column\|column-reverse<br />决定主轴的方向，即项目的排列方向 | no-wrap\|wrap\|wrap-reverse<br />决定容器内项目是否可以换行 | direction和wrap的简写 | flex-start\|flex-end\|center\|space-between\|space-around\|space-evenly<br />项目在主轴上的对齐方式，其中space-aroud和space-evenly的区别在于头尾间隔的大小 | stretch\|flex-start\|flex-end\|center\|baseline | flex-start\|flex-end\|center\|space-between\|space-around\|stretchjj |

flex-grow 和 flex-shrink 按照项目的比例处理剩余距离和溢出距离

align-content 和 align-items 的区别

align-content 是将项目视作一整个内容区域进行布局，align-items实际上是项目（items）的align-self默认值

| align-content:center                                         | align-items:center                                           | align-content:space-around                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20210816163037011](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816163037011.png) | ![image-20210816163229312](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816163229312.png) | ![image-20210816161938378](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816161938378.png) |

| grid布局justify-content：center                              | grid布局justify-items：center                                | flex布局justify-content：center                              | flex布局justify-items：center                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image-20210816164501573](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816164501573.png) | ![image-20210816164632551](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816164632551.png) | ![image-20210816164855475](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816164855475.png) | ![image-20210816164739117](%E7%A7%8B%E6%8B%9B%E9%9D%A2%E8%AF%95%E6%80%BB%E7%BB%93.assets/image-20210816164739117.png) |



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