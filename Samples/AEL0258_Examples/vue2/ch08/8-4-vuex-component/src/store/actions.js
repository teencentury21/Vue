import axios from 'axios';
export default {
    async updateCurrencyExchangeRates({ commit }) {
        const response = await axios.get('/api/rates/ntd');
        console.log('updateCurrencyExchangeRates', response);
        if (response.data.code === 200) {
            commit('updateUsdRate', response.data.data.rates.usd);
            commit('updateJpnRate', response.data.data.rates.jpn);
        }
    },
};