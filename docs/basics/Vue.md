# Vue

为了方便小伙伴们自行调试，我决定 Vue 相关的demo都使用CDN的方式应用，想调试直接建个html文件就可以。当然，SFC才是yyds

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

