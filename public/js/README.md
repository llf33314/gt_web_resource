# gt.js

### vue-cli 全局应用：

```
 
 ~ main.js
    const gt = require('./gt.js')
    Vue.prototype.$gt = gt
 ~ index.vue
    <button @click="$gt.fn()">gt</button>

```
### html应用：

```
    ~ html:
    <script src="gt.js"></script>

    ~ script:
    gt.fn()

```

### vue 组件应用：

```
    ~ vue
    <button onclick="gt.abc('我是window的方法')">test</button>
    <button @click="fn.abc('我是vue的方法')">test</button>
    
    ~ script
    require('./../../../assets/js/gt.js')
    export default {
        data() {
            return {
                test: 'test',
                fn:{}
            }
        },
        mounted () {
            this.fn = gt
        }
    } 

```
