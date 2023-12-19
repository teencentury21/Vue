export default {
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
};