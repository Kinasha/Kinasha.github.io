# Vue

为了方便小伙伴们自行调试，我决定 Vue 相关的demo都使用CDN的方式应用，想调试直接建个html文件就可以。当然，SFC才是yyds



## 基础知识

- v-if 和 v-for 嵌套使用

  ```html
   <template v-for='{isShow,name} in list'>
      <li v-if='isShow'>{{name}}</li>
   </template>
  ```

  否则在 `v-for` 中定义的变量，拿不到。

## 全选列表

```html
<body>
    <div id="app"></div>
    <script src="https://unpkg.com/vue@2.6.14/dist/vue.js"></script>
    <script>
        new Vue({
            el: '#app',
            template: `
            <div>
                <ul>
                    <li>
                        <input type="checkbox" v-model:checked="isAllChecked" @click="handleCheckAll"/>全选
                    </li>
                    <li v-for="item in list">
                        <input type="checkbox" v-model:checked="item.isChecked"/>{{item.name}}
                    </li>
                </ul>
            </div>
            `,
            data() {
                return {
                    list: [{ name: 'apple', isChecked: true }, { name: 'banana', isChecked: false }, { name: 'pear', isChecked: false }]
                }
            },
            computed: {
                isAllChecked: {
                    get() {
                        return this.list.every(e => e.isChecked)
                    },
                    set(v) {
                        return v
                    }
                }
            },
            methods: {
                handleCheckAll() {
                    if (this.isAllChecked) {
                        this.list.forEach(e => e.isChecked = false)
                    } else {
                        this.list.forEach(e => e.isChecked = true)
                    }
                    // 直接看代码逻辑似乎下面直接注释的部分也行，然而，然而由于 计算属性在每次依赖发生变更时都会更新，所以会有bug ，警惕自己凡事不要想当然。
                    // this.list.forEach(e => e.isChecked = !this.isAllChecked)
                }
            }
        })
    </script>
</body>
```

## 图片懒加载

利用自定义指令实现图片懒加载，不想考虑兼容性问题，直接用 `intersection observer`

```html
<body>
    <div id="app">
        <div>
            <div style="height: 100vh;background-color: #bfc;"></div>
            <!-- 随便找的一张图片 -->
            <img src="" alt=""
                v-lazy='`https://tse3-mm.cn.bing.net/th/id/OIP-C.xHUlMuh-Orid25Hj-SYW3QHaHb?w=171&h=180&c=7&r=0&o=5&pid=1.7`'>
        </div>
    </div>
    <script src="https://unpkg.com/vue@2.6.14/dist/vue.js"></script>
    <script>
        // 小电视图片的base64编码
        const defaultSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABHCAMAAAB4UkqjAAAAh1BMVEUAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0UCIZXAAAALHRSTlMAoJDx4OYL/DcGF+6+JNi4ycSIT2k6LPeWfRzTVPXPszEQrV0hpo12cEZAZFpRNIQAAAJVSURBVFjD7dbZcpswGIbhHwwSi81q8Ib33fnu//oatRIpmliDhQ/aaZ+TKInnjVgkhb4RJMhP9Fzo8PiD+vEA+JPnqS0+1dRHBJhibAzh2HNeekxP9Z8XBSMZM6SmRBYx65QeM6XsY3rKPqanLGMWqeDmOh0b/Io9+YHi3gKtdExgLznSlyjFMGnUphIMlcgY22C4DSPBxTu4IrXDe+yI6IDWbPSqGVoHoohDyip6XZVB4hFN1TgPyUaYQ5rSWQ0nZGcC6UyJukKypa4yIXX3HLLlqCdHX++HLRfS/9bbWvvHLSLNR3N6tRXdFwdxejekiYF4fDnWYa/WqSm2PqRCSy0hrbP5RxAaW8141N17tVbZ+S1fFYbWFF2+1lqg62BoBdAsqWOLroWhxTh+M8vmWuuaxp1WaWjRSn43yl35sHTLUjxiaWlqnYE4LZoJme3v13MibqepFZRL6otV5V+/Hv+xVvi+FsvZG1qh/LQ7uFXnF/HlwcEfYlDktW2r5EARUiXWc1xRWAC8tGwxsdJ9dcRnYrddMdtrjDZyAy3kXrSJ7O89u8zEZAIKxBRnFzbonWD3ZkfCrrmzP+6979nicjAnW3NZ4OS1R6GtVBa8drTek539up3NAgMvcv51WNZQitCiFBZQaqIMSrx1XrWNoWTy/w1r+hk+xjuMSVjGGC6WZ3S1xlDriqTKxzB+Ra3I4bDHne62drqmied57QR9z0D94dHnOEmvJ/pWAMm4ovL2TTcJ5cRyMlHrbkdG5c/5r82fYqt+K/iR89m2JrP9PEZyI80PsPxVT0P3FAEAAAAASUVORK5CYII=`
        const lazyLoad = {
            install(Vue, options) {
                const { defaultSrc } = options
                Vue.directive('lazy', {
                    bind(el, binding) {
                        el.setAttribute('data-src', binding.value)
                        el.setAttribute('src', defaultSrc)
                    },
                    inserted(el) {
                        const observer = new IntersectionObserver((entries) => {
                            const realSrc = el.dataset.src
                            if (entries[0].isIntersecting) {
                                el.src = realSrc
                            }
                        })
                        observer.observe(el)
                    },
                })
            }
        }
        Vue.use(lazyLoad, { defaultSrc })
        const vm = new Vue({
            el: '#app',
            template: '#app',
        })
    </script>
</body>
```

在做这个demo的时候发现了一个Vue2 到 Vue3 的变更，在Vue 3 全局Vue API 已变更为使用应用程序实例，这句话意味着，上文中的Vue 2 语法

``` Vue 2.0
Vue.use(lazyLoad, { defaultSrc })
const vm = new Vue({
    el: '#app',
    template: '#app',
})
```

要变成 

```Vue 3.0
const app = Vue.createApp({
    el: '#app',
    template: '#app',
})
app.use(lazyLoad, { defaultSrc })
```

>顺带一提，template 选项竟然可以是个以 `#` 开头的字符串，~~真的离大谱~~。应该是为了像我一样的CDN引入的用户，更方便的写 template，毕竟字符串里写html，没提示和自动补全实在反人类，但是有个小bug，它会消耗一层，这就意味着我们需要一个额外的根元素，Vue 3 中引入 fragment 支持了多个节点，解决了这个问题（🐱‍🚀 牛

