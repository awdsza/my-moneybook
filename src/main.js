import Vue from 'vue';
import App from './App.vue';
import router from '@/routes/index';
import store from '@/store/index';
import { Datetime } from 'vue-datetime';
// You need a specific loader for CSS files
import 'vue-datetime/dist/vue-datetime.css';

Vue.config.productionTip = false;

Vue.use(Datetime);
Vue.component('dateTime', Datetime);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
