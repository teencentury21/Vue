var app = Vue.createApp({
    data: function() {
        return {
            image1: { src: "./images/slide-01.jpg", name: '圖片01', },
            image2: { src: "./images/slide-02.jpg", name: '圖片02', },
            image3: { src: "./images/slide-03.jpg", name: '圖片03', },
        };
    },
});
app.component('image-card', {
    template: `
        <div class="card">
            <img :src="src" class="card-img-top">
            <div class="card-body">{{ name }}</div>
        </div>
    `,
    props: ['src', 'name']
});
app.mount('#app');