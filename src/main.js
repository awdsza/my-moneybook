import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;

Vue.use(VCalendar, {
  componentPrefix: 'vc', // Use <vc-calendar /> instead of <v-calendar />
});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
