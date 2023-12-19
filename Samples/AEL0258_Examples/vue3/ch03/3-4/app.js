var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            preview: ''
        };
    },
    methods: {
        handleChange(event) {
            var file = event.target.files[0];
            if(file && file.type.match(/^image\/(png|jpeg)$/)) {
                this.preview = window.URL.createObjectURL(file);
            }
        }
    }
});
app.mount('#app');