var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            checkValue: ['A'],
            options: [
                { text: 'A', value: 'A' },
                { text: 'B', value: 'B' },
                { text: 'C', value: 'C' },
            ],
        };
    }
});
app.mount('#app');