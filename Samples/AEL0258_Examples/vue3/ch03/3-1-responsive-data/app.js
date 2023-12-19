// 建立資料模型變數
var data = {
    message: 'origin message'
};
var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        // 引用外部建立的變數
        return data;
    }
});
app.mount('#app');

// 更新 message 屬性
data.message = 'outside update';

console.log(app, data)