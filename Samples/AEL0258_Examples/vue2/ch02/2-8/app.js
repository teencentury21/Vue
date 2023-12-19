var app = new Vue({
    el: '#app',
    data: {
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
    }
});
