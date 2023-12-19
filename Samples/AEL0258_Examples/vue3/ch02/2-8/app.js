var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            // 圖片清單
            imageList: [
                {
                    name: '狗狗照片',
                    path: './images/slide-01.jpg',
                    is_cat_pic: false,
                    is_real_cat: false,
                },
                {
                    name: '貓咪圖片',
                    path: './images/slide-02.jpg',
                    is_cat_pic: true,
                    is_real_cat: false,
                },
                {
                    name: '貓咪照片',
                    path: './images/slide-03.jpg',
                    is_cat_pic: true,
                    is_real_cat: true,
                },
            ]
        };
    }
});
app.mount('#app');