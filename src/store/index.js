import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import { POST, GET, PUT, DELETE } from '@/api/index';
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
        return await POST('/accountbook', payload, {
          Authorization: `Bearer ${getAuthFromCookie()}`,
        });
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
        const result = await GET(`/accountbook/${seq}`, {
          Authorization: `Bearer ${getAuthFromCookie()}`,
        });
        return result;
      } catch (e) {
        return e;
      }
    },
    async updateAccountBook({ commit }, payload) {
      try {
        return await PUT(`/accountbook/${payload.seq}`, payload, {
          Authorization: `Bearer ${getAuthFromCookie()}`,
        });
      } catch (e) {
        return JSON.parse(e);
      }
    },
    async deleteAccountBook({ commit }, { seq }) {
      try {
        return await DELETE(
          `/accountbook/${seq}`,
          {},
          {
            Authorization: `Bearer ${getAuthFromCookie()}`,
          },
        );
      } catch (e) {
        return JSON.parse(e);
      }
    },
    async getCategories({ commit }, { inOutType }) {
      try {
        const result = await GET(`/category/${inOutType}`, {
          Authorization: `Bearer ${getAuthFromCookie()}`,
        });
        return result;
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    async saveCategory({ commit }, { inOutType, categoryName }) {
      try {
        return await POST(
          `/category`,
          {
            inOutType,
            categoryName,
          },
          { Authorization: `Bearer ${getAuthFromCookie()}` },
        );
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    async getCategory({ commit }, { paramCategorySeq, paramInOutType }) {
      try {
        const result = await GET(
          `/category/${paramInOutType}/${paramCategorySeq}`,
          {
            Authorization: `Bearer ${getAuthFromCookie()}`,
          },
        );
        return result;
      } catch (e) {
        console.error(e);
        return e;
      }
    },
    async updateCategory({ commit }, { seq, categoryName }) {
      try {
        const result = await PUT(
          `/category/${seq}`,
          {
            categoryName,
          },
          { Authorization: `Bearer ${getAuthFromCookie()}` },
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async deleteCategory({ commit }, { seq }) {
      try {
        const result = await DELETE(
          `/category/${seq}`,
          {},
          {
            Authorization: `Bearer ${getAuthFromCookie()}`,
          },
        );
        return result;
      } catch (e) {
        return e;
      }
    },
    async changeCategorySort({ commit }, { categories, inOutType }) {
      try {
        const result = await PUT(`/category/sort/${inOutType}`, categories, {
          Authorization: `Bearer ${getAuthFromCookie()}`,
        });
        return result;
      } catch (e) {
        return e;
      }
    },
  },
});
