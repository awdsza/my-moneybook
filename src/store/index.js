import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { POST, GET, PUT } from '@/api/index';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
  saveUserSeqToCookie,
  getUserSeqFromCookie,
} from '@/utils/cookies';
import { getOutGoingPurpose } from '@/storage';
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
        return await POST('users', payload);
      } catch (e) {
        return JSON.parse(e);
      }
    },
    async loginUser({ commit }, payload) {
      try {
        const { isSuccess, token, userName, userSeq } = await POST(
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
        return await POST('/accountbook', payload);
      } catch (e) {
        return JSON.parse(e);
      }
    },
    async getAccountBookList({ commit }, { searchStartDate, searchEndDate }) {
      try {
        const result = await GET(
          `/accountbook/${getUserSeqFromCookie()}/bookDate/${searchStartDate}/${searchEndDate}`,
        );
        return result.map(accountbook => ({
          ...accountbook,
          outGoingPurposeText: getOutGoingPurpose(accountbook.outGoingPurpose),
        }));
      } catch (e) {
        return e;
      }
    },
    async getAccountBook({ commit }, { seq }) {
      try {
        const result = await GET(`/accountbook/${seq}`);
        return result;
      } catch (e) {
        return e;
      }
    },
    async updateAccountBook({ commit }, payload) {
      try {
        return await PUT(`/accountbook/${payload.seq}`, payload);
      } catch (e) {
        return JSON.parse(e);
      }
    },
  },
});
