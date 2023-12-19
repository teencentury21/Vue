//register component
Vue.component('image-card', httpVueLoader('./components/image-card.vue'));

var app = new Vue({
    el: "#app",
    data: {
        image1: { src: "./images/slide-01.jpg", name: '圖片01', },
        image2: { src: "./images/slide-02.jpg", name: '圖片02', },
        image3: { src: "./images/slide-03.jpg", name: '圖片03', },
    },
    // components: {
    //     'image-card': httpVueLoader('./components/image-card.vue')
    // }
})