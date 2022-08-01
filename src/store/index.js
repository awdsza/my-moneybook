import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { post } from '@/api/index';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';
export default new Vuex.Store({
  state: {
    isLogin: false,
    token: getAuthFromCookie() || '',
    userName: getUserFromCookie() || '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
  },
  getters: {},
  actions: {
    async signUpUser({ commit }, payload) {
      try {
        return await post('users', payload);
      } catch (e) {
        return JSON.parse(e);
      }
    },
    async loginUser({ commit }, payload) {
      try {
        const { isSuccess, token, userName } = await post(
          'users/login',
          payload,
        );
        if (token) {
          saveAuthToCookie(token);
          saveUserToCookie(userName);
          commit('setToken', token);
          commit('setUserName', userName);
          return isSuccess;
        }
      } catch (e) {
        return JSON.parse(e.message);
      }
    },
  },
});
