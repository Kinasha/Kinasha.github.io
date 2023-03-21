mainComponent 

实例节点的对应的组件节点（ 它是一个 `reflect` ）。修改此项会将实例切换为其他组件的实例。如果在嵌套实例中修改此项，会同步修改所有的对应的实例节点。

![image.png|200](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25330046409/42e0/9797/3289/263c51d00ddb567abd124edcc4023d39.png)

masterComponent 和它一样，
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25329967974/2e05/14ec/78a5/1c634b4f6772a6dc8b5f8cda7c6d7260.png)


nested instance 

嵌套的实例节点

![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25332504275/67e5/c1ce/0b33/34ee7cca130973090f630814bd1de4ad.png)

figma 中可以将 property 选项透传吗？

可以设置属性描述，

![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25358437737/e98c/9b79/7133/a0ab57e8c7dc46e833ebe796abec46ba.png)

考虑 `C2D2C` 联动问题，我想到的第一个方案是
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25368906975/97ce/7c3a/104b/26a788b1d9b681c57ae79b929d0dfffd.png)

尽管 `setPluginData` 支持 ComponentNode ，但是有å

在 figma 中后创建的图层在左边的栈顶


![图片](https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/25456541379/1958/aef7/a518/30db5bb95aaba8371640fa79fb572646.png)



- C2D
	- 生成旧规范的 button 、tag、dot、switch ，(预计下周可完成组件库修改，届时可替换为新版)
	- 修改 html2figma 以支持新版方案。
	- C2D2C 新方案评审，初版可行性验证。 
	- `@music/dolphin-c2d2c-helper` V0.0.1
这周时间主要花在联动方案设计上了，觉得只有跑通新的联动方案才能往后做。下周会抓紧生成基础组件。


## 如何通过脚本让组件生成自定义属性

https://www.figma.com/plugin-docs/api/properties/ComponentPropertiesMixin-componentpropertydefinitions


每个节点身上保存着 `componentPropertiesReference` ，通过修改对应节点的此属性可以让

## 如何提示组件的文档链接

https://www.figma.com/plugin-docs/api/properties/nodes-documentationlinks/

只允许设置一个连接

```js
node.documentationLinks = [{uri: "https://www.figma.com"}]

// clear documentation links
node.documentationLinks = []
```

## 如何显示组件描述


![83080ee391079d2da352d40cd24f1a19](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25578728221/c1c4/58c5/4174/83080ee391079d2da352d40cd24f1a19.png)




## 如何删除图层

```js
xx.remove()
```


## 如何添加 boolean 属性

```js
const key = comp.addComponentProperty('xxx','BOOLEAN',true)
someLayer.component
```


## 如何让一个元素 autolayout

![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25838399355/4dfd/daa5/1554/c1f44121f8fd2da29efbe888e0ff12e7.png)
1. layoutMode ：horizontal or vertical
2. itemSpacing
3. horizontalPadding
4. verticalPadding
5. primaryAixsSizingMode （hug for ‘AUTO’） fixed for 
6. counterAixsSizingMode 
7. PrimaryAlignItems
8. Coutn

还有一个 itemReverseZIndex

如何设置一个元素的 spacebetween

将，

Autolayout 时还有一个坑，
添加 AutoLayout 会改变子图层的顺序，
可以通过翻转解决
参考[这篇](https://forum.figma.com/t/layer-order-in-auto-layout/2240/32)


## 如何添加 border 

如果是 frame 

用的是 stroke 

考虑 box-sizing


