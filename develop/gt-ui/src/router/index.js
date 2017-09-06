import Vue from 'vue'
import Router from 'vue-router'
// 异步加载
const Index = ()=>import('@/components/Index')



Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  }
]

const router = new Router({
  // mode: 'history',
  routes
});

export default router;
