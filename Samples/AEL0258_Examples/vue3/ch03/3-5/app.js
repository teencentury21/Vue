var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            imageList: [
                { src: "./images/slide-01.jpg", name: '圖片01', isShow: false },
                { src: "./images/slide-02.jpg", name: '圖片02', isShow: false },
                { src: "./images/slide-03.jpg", name: '圖片03', isShow: false },
                { src: "./images/slide-04.jpg", name: '圖片04', isShow: false },
                { src: "./images/slide-05.jpg", name: '圖片05', isShow: false },
            ]
        };
    },
    methods: {
        showName(index) {
            this.imageList[index].isShow = true;
        },
        hiddenName(index) {
            this.imageList[index].isShow = false;
        }
    }
});
app.mount('#app');