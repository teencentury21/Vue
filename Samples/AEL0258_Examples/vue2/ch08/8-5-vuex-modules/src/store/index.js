import Vue from 'vue';
import Vuex from 'vuex';
import rate_exchange from './modules/rate_exchange';

Vue.use(Vuex);

const storeOptions = {
  // 狀態機
  state: {},
  // 更新狀態
  getters: {},
  // 更新器
  mutations: {},
  // 異步處理動作
  actions: {},
  // 模組
  modules: {
    rate_exchange,
  },
};

export default new Vuex.Store(storeOptions);
