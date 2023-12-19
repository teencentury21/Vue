var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            value1: '使用 v-bind 綁定資料',
            value2: '使用 v-bind 縮寫綁定資料',
        };
    }
});
app.mount('#app');