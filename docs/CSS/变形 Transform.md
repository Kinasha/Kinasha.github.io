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


