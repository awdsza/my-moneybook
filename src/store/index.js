import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { post } from '@/api/index';
export default new Vuex.Store({
  state: {
    isLogin: false,
  },
  mutations: {},
  getters: {},
  actions: {
    async signUpUser(context, payload) {
      return await post('users', payload);
    },
  },
});
