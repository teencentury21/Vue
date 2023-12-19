import state from './state.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

const rateExchangeModule = {
    // 須開啟 namespace
    namespaced: true,
    // 模組狀態資料
    state,
    // 模組自定義組合變數
    getters,
    // 模組更新器
    mutations,
    // 模組異步處理動作
    actions,
};

export default rateExchangeModule;
