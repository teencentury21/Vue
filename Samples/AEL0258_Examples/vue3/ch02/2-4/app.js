var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            className: 'test-style-class',
            customStyle: {
                width: '200px',
                margin: '5px',
                padding: '5px 10px',
                color: '#FEFEFE',
                background: '#666',
                'text-align': 'center'
            },
        };
    }
});
app.mount('#app');