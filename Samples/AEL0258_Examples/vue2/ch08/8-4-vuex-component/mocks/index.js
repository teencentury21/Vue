import Mock from 'mockjs';

import getNtdCurrencyExchangeRates from './getNtdCurrencyExchangeRates.json';

Mock.mock('/api/rates/ntd', 'get', { code: 200, message: 'success', data: getNtdCurrencyExchangeRates });
