 记录 CSS 中的 `@` 规则（At-rules），例如 `@media` 媒体查询，`@container` 容器查询等。

## [@layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

`@layer` 用来声明了一个*级联层*，cascade layer，也可以用来在多个级联层中定义优先顺序。CSS 的全程是层叠样式表，在一个样式表中可以定义多个级联层。

`@layer` 可以为一段 CSS 规则指定名称，方便复用。如果有多个同名的级联层，后面的会覆盖前面的。

个人感觉 `@layer` 类似于在 CSS 中的**函数声明**的概念，搭配 `@import` 规则使用，可以更好地组织 CSS 代码。

[举个 🌰](https://codesandbox.io/s/layer-gui-ze-shi-yan-vujzzg)


![image.png](https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/25868095628/1bf2/203e/a6f8/ec90159a492d13320be3016a56e1f7bf.png)


## @container 

容器查询，


## @font-face

