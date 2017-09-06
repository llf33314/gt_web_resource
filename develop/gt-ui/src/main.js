// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from './http/index'
import router from './router'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import { timeTransForm } from './assets/js/Lib'
require('./assets/iconfont/iconfont.css')
Vue.use(ElementUI)
// 时间戳转化
Vue.prototype.timeTransForm = timeTransForm
Vue.prototype.axios = axios
Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  template: '<App/>',
  components: { App }
})
