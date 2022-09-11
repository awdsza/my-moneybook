import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { POST, GET, PUT } from '@/api/index';
import {
  saveAuthToCookie,
  saveUserToCookie,
  saveSyncDateTimeToCookie,
  getAuthFromCookie,
  getUserFromCookie,
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
        const { isSuccess, access_token, userName, syncDateTime } = await POST(
          'users/login',
          payload,
        );
        if (access_token) {
          saveAuthToCookie(access_token);
          saveUserToCookie(userName);
          saveSyncDateTimeToCookie(String(syncDateTime));
          commit('setToken', access_token);
          commit('setUserName', userName);
          return { isSuccess };
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
          `/accountbook?searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
          { Authorization: `Bearer ${getAuthFromCookie()}` },
        );
        return result.map(accountbook => ({
          ...accountbook,
          outGoingPurposeText: getOutGoingPurpose(accountbook.outGoingPurpose),
        }));
      } catch (e) {
        return e;
      }
    },
    async getAccountBookCalendarList(
      { commit },
      { searchStartDate, searchEndDate },
    ) {
      try {
        const result = await GET(
          `/accountbook/calendar?searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
          { Authorization: `Bearer ${getAuthFromCookie()}` },
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async getAccountBookWeekList(
      { commit },
      { searchStartDate, searchEndDate },
    ) {
      try {
        const result = await GET(
          `/accountbook/week?&searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
          { Authorization: `Bearer ${getAuthFromCookie()}` },
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async getAccountBookCalendarDetail({ commit }, { bookDate }) {
      try {
        const result = await GET(
          `/accountbook/calendar/detail?bookDate=${bookDate}`,
          { Authorization: `Bearer ${getAuthFromCookie()}` },
        );
        return result;
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
