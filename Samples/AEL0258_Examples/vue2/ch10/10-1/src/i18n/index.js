import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n)

const zh_TW = {
    // 中文語系檔內容
    HELLO_WORLD: '歡迎來到 Vue i18n 的世界'
}

const en = {
    // 英文語系檔內容
    HELLO_WORLD: 'Welcome To Vue i18n\'s World.'
}

const i18n = new VueI18n({
    locale: 'en',
    messages: {
        zh_TW,
        en,
    },
})

export default i18n;