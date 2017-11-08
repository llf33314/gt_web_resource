# gt.js

### vue-cli 使用方法：

```
 
 ~ main.js
    const gt = require('./gt.js')
    Vue.prototype.$gt = gt
 ~ index.vue
    <button @click="$gt.fn()">gt</button>

```
### html引用

```
    ~ html:
    <script src="gt.js"></script>

    ~ script:
    gt.fn()

```
