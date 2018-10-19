import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/home'; //较小页面 没有必要分开打包js
import NotFound from '@/views/404';
// let  demand = () => import ('@/views/'); 按需加载 分开打包js

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ]
});

//导出
export default router;