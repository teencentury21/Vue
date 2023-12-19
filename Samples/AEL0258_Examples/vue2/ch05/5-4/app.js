var app = new Vue({
    el: "#app",
    data: {
        selectRef: '',
        imageList1: [
            { src: "./images/slide-01.jpg", name: '圖片01', },
            { src: "./images/slide-02.jpg", name: '圖片02', },
            { src: "./images/slide-03.jpg", name: '圖片03', },
        ],
        imageList2: [
            { src: "./images/slide-03.jpg", name: '圖片03', },
            { src: "./images/slide-04.jpg", name: '圖片04', },
            { src: "./images/slide-05.jpg", name: '圖片05', },
        ],
    },
    watch: {
        selectRef: function(newRefName) {
            if(this.$refs[newRefName] !== undefined) {
                this.$refs[newRefName].changeBlackStyle();
            }
        }
    },
    components: {
        'image-cards': httpVueLoader('./components/image-cards.vue')
    }
});