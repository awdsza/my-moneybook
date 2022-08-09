import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { post, get, put } from '@/api/index';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  saveUserSeqToCookie,
  getUserSeqFromCookie,
} from '@/utils/cookies';
export default new Vuex.Store({
  state: {
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
  getters: {
    isLogin(state) {
      return state.token !== '' && state.userName != '';
    },
  },
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
        const { isSuccess, token, userName, userSeq } = await post(
          'users/login',
          payload,
        );
        if (token) {
          saveAuthToCookie(token);
          saveUserToCookie(userName);
          saveUserSeqToCookie(userSeq);
          commit('setToken', token);
          commit('setUserName', userName);
          return isSuccess;
        }
      } catch (e) {
        return JSON.parse(e.message);
      }
    },
    async createAccountBook({ commit }, payload) {
      try {
        return await post('/accountbook', payload);
      } catch (e) {
        return JSON.parse(e);
      }
    },
    async getAccountBookList({ commit }, { searchStartDate, searchEndDate }) {
      try {
        const result = await get(
          `/accountbook/${getUserSeqFromCookie()}/bookDate/${searchStartDate}/${searchEndDate}`,
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async getAccountBook({ commit }, { seq }) {
      try {
        const result = await get(`/accountbook/${seq}`);
        return result;
      } catch (e) {
        return e;
      }
    },
    async updateAccountBook({ commit }, payload) {
      try {
        return await put(`/accountbook/${payload.seq}`, payload);
      } catch (e) {
        return JSON.parse(e);
      }
    },
  },
});
