import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

// Vuex Option API
const storeOptions = {
  // 狀態機
  state: {
    ntd: 0,
    usdRate: 0,
    jpnRate: 0,
  },
  // 更新狀態
  getters: {
    usd(state) {
      return Math.round((state.ntd / state.usdRate) * 100) / 100;
    },
    jpn(state) {
      return Math.round((state.ntd / state.jpnRate) * 100) / 100;
    },
  },
  // 更新器
  mutations: {
    updateNtd(state, payload) {
      console.log('updateNtd', payload);
      state.ntd = payload;
    },
    // 更新 USD Rate 至 state
    updateUsdRate(state, payload) {
      console.log('updateUsdRate', payload);
      state.usdRate = payload;
    },
    // 更新 JPN Rate 至 state
    updateJpnRate(state, payload) {
      state.jpnRate = payload;
    },
  },
  // 異步處理動作
  actions: {
    async updateCurrencyExchangeRates({ commit }) {
      const response = await axios.get('/api/rates/ntd');
      console.log('updateCurrencyExchangeRates', response);
      if(response.data.code === 200) {
        commit('updateUsdRate', response.data.data.rates.usd);
        commit('updateJpnRate', response.data.data.rates.jpn);
      }
    },
  },
};

export default new Vuex.Store(storeOptions);