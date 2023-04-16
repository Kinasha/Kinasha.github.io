记录一些纯 CSS 的小技巧。

## 实现 3D 的书的翻动效果


<iframe src="https://codesandbox.io/embed/brave-kapitsa-id5ico?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
     title="实现 3D 书本效果"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>


   
## 实现切角

实现如下图所示的卡片切角效果。
![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25871876867/0cff/db71/8e2e/da2d7111879e164a244388b818f4067d.png)
方案有如下三种：

- 切图：实现最简单，适合不规则的情况。
- 边框：利用[边框画任意凸几何形](https://juejin.cn/post/6844903781600100359)的技巧。
- 渐变：利用[线性渐变](https://www.w3cplus.com/css3/css-secrets/cutout-corners.html)制造 `color-stop` 的技巧。

## 实现不规则气泡动效

> [预览地址](https://codesandbox.io/s/sparkling-hooks-9xopgi?file=/index.html)

使用自定义变量 （--scale，--translate-left 等）将 transform 属性解耦。

**注意点**：

transform 属性并非 **简写属性** ，不能像背景（background）一样拆分成多个独立的属性。（浏览器支持中）。

如果想要每次变化的值是随机数，可以添加一个 raf 的定时器，将 offset 作为变量，每次绘制时随机产生，只要保持关键帧归位即可。
