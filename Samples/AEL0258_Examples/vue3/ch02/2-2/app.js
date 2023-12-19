var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            message: 'This is a message.',
            counter: 10,
            foods: ['rice', 'apple', 'orange', 'cake'],
        };
    }
});
app.mount('#app');