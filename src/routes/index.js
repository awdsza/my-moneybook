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
      path: '/main/calendar',
      component: () =>
        import('@/views/accountbook/AccountBookCalendarView.vue'),
    },
    {
      path: '/main/week',
      component: () => import('@/views/accountbook/AccountBookWeekView.vue'),
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
      path: '/setting',
      component: () => import('@/views/settings/SettingView.vue'),
    },
    {
      path: '/setting/income',
      component: () => import('@/views/settings/InComeSettingView.vue'),
    },
    {
      path: '/setting/outgoing',
      component: () => import('@/views/settings/OutGoingSettingView.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/error/PageNotFound.vue'),
    },
  ],
});
export default router;
