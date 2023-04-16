
## 神奇的 transfrom-style

[transform-style](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-style) 是一个暂未被所有浏览器支持的特性。它能让子元素以 3D 的形式展示，可以用来创造富有 3D 效果的动效。


## 使用变形的小技巧

- 在变形时结合 CSS 变量，能够实现更好的渐入渐出效果。

```css
img{
	--f:1;
	transform : scale(var(--f));
	transition: all 1s;
}
img:hover{
	--f:1.3;
}
```

<iframe src=" https://codesandbox.io/embed/runtime-hooks-2l65pv?fontsize=14&hidenavigation=1&theme=dark"
     Style="width:100%; height: 500px; border: 0; border-radius: 4px; overflow: hidden;"
     Title="transform-demo 1"
     Allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     Sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

左边的效果结合了 CSS 变量，使得淡入淡出的效果很自然。
