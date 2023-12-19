import { createI18n } from 'vue-i18n';
import zh_TW from './zh_TW.json';
import en from './en.json';
import ja from './ja.json';

export default createI18n({
    locale: 'en',
    messages: {
        zh_TW: zh_TW,
        en: en,
        ja: ja,
    }
})