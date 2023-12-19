import Vue from 'vue';
import Vuex from 'vuex';
import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const storeOptions = {
    // 狀態資料
    state,
    // 自定義組合變數
    getters,
    // 更新器
    mutations,
    // 異步處理動作
    actions,
};

export default new Vuex.Store(storeOptions);
