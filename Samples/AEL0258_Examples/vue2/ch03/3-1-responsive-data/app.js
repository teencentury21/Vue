// 建立資料模型變數
var data = {
    message: 'origin message'
};
var app = new Vue({
    el: '#app',
    // Vue.js 資料模型
    // 引用外部建立的變數
    data: function() {
        return data;
    },
});

// 更新 message 屬性
data.message = 'outside update';