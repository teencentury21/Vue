import Vue from 'vue';
import VueI18n from 'vue-i18n';
import zh_TW from './zh_TW.json';
import en from './en.json';
import ja from './ja.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        zh_TW,
        en,
        ja,
    },
})

export default i18n;