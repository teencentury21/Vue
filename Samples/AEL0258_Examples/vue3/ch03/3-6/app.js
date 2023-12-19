var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            top: 50,
            left: 50,
        };
    },
    methods: {
        moveY(value) {
            this.top += value;
        },
        moveX(value) {
            this.left += value;
        }
    }
});
app.mount('#app');