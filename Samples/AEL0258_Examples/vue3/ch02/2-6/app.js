var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            // 輪播圖片相對位置清單
            slideList: [
                './images/slide-01.jpg',
                './images/slide-02.jpg',
                './images/slide-03.jpg',
                './images/slide-04.jpg',
                './images/slide-05.jpg',
            ]
        };
    }
});
app.mount('#app');