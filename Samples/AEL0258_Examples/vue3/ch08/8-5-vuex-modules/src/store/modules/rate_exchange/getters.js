export default {
    usd(state) {
        return Math.round((state.ntd / state.usdRate) * 100) / 100;
    },
    jpn(state) {
        return Math.round((state.ntd / state.jpnRate) * 100) / 100;
    },
};