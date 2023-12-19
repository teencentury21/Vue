import Mock from 'mockjs';

import zh_TW from './zh_TW.json';
import en from './en.json';
import ja from './ja.json';

Mock.mock('/i18n/zh_TW.json', 'get', zh_TW);
Mock.mock('/i18n/en.json', 'get', en);
Mock.mock('/i18n/ja.json', 'get', ja);
