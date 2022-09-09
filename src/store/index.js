import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { POST, GET, PUT, DELETE } from '@/api/index';
import {
  saveAuthToCookie,
  saveUserToCookie,
  saveUserSeqToCookie,
  saveSyncDateTimeToCookie,
  getAuthFromCookie,
  getUserFromCookie,
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
        const { isSuccess, access_token, userName, syncDateTime, userSeq } =
          await POST('users/login', payload);
        if (access_token) {
          saveAuthToCookie(access_token);
          saveUserToCookie(userName);
          saveUserSeqToCookie(userSeq);
          saveSyncDateTimeToCookie(syncDateTime);
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
          `/accountbook?userSeq=${getUserSeqFromCookie()}&searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
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
          `/accountbook/calendar?userSeq=${getUserSeqFromCookie()}&searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
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
          `/accountbook/week?userSeq=${getUserSeqFromCookie()}&searchStartDate=${searchStartDate}&searchEndDate=${searchEndDate}`,
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async getAccountBookCalendarDetail({ commit }, { bookDate }) {
      try {
        const result = await GET(
          `/accountbook/calendar/detail?userSeq=${getUserSeqFromCookie()}&bookDate=${bookDate}`,
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
    async getCategories({ commit }, { inOutType }) {
      try {
        const result = await GET(
          `/category/${getUserSeqFromCookie()}/${inOutType}`,
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async saveCategory({ commit }, { inOutType, categoryName }) {
      try {
        return await POST(`/category`, {
          inOutType,
          categoryName,
          userSeq: getUserSeqFromCookie(),
        });
      } catch (e) {
        return e;
      }
    },
    async getCategory({ commit }, { paramCategorySeq }) {
      try {
        const result = await GET(`/category/${paramCategorySeq}`);
        return result;
      } catch (e) {
        return e;
      }
    },
    async updateCategory({ commit }, { seq, categoryName }) {
      try {
        const result = await PUT(`/category/${seq}`, {
          categoryName,
        });
        return result;
      } catch (e) {
        return e;
      }
    },
    async deleteCategory({ commit }, { seq }) {
      try {
        const result = await DELETE(`/category/${seq}`);
        return result;
      } catch (e) {
        return e;
      }
    },
    async changeCategorySort({ commit }, { categories, inOutType }) {
      try {
        const result = await PUT(
          `/category/sort/${getUserSeqFromCookie()}/${inOutType}`,
          categories,
        );
        return result;
      } catch (e) {
        return e;
      }
    },
  },
});
