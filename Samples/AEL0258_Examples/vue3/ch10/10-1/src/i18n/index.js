import { createI18n } from 'vue-i18n';

const zh_TW = {
    // 中文語系檔內容
    HELLO_WORLD: '歡迎來到 Vue i18n 的世界'
}

const en = {
    // 英文語系檔內容
    HELLO_WORLD: 'Welcome To Vue i18n\'s World.'
}

export default createI18n({
    locale: 'en',
    messages: {
        en: en,
        zh_TW: zh_TW,
    }
})