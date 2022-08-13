import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/login/LoginFormView.vue'),
    },
    {
      path: '/main/list',
      component: () => import('@/views/accountbook/AccountBookMainView.vue'),
    },
    {
      path: '/main/write',
      component: () => import('@/views/accountbook/AccountBookWriteView.vue'),
    },
    {
      path: '/main/:seq',
      component: () => import('@/views/accountbook/AccountBookWriteView.vue'),
    },
    {
      path: '/main/info',
      component: () => import('@/views/myinfo/MyInfoView.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/error/PageNotFound.vue'),
    },
  ],
});
export default router;
