var app = Vue.createApp({
    data: function() {
        return {
            image1: { src: "./images/slide-01.jpg", name: '圖片01', },
            image2: { src: "./images/slide-02.jpg", name: '圖片02', },
            image3: { src: "./images/slide-03.jpg", name: '圖片03', },
        };
    },
    components: {
        'image-card': Vue.defineAsyncComponent(() => loadModule('./components/image-card.vue', options))
    }
});
app.mount('#app');