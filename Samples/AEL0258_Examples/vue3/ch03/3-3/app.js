var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            name: '',
            age: '',
            list: [
                { name: '王大明', age: 25 },
            ]
        };
    },
    methods: {
        add() {
            this.list.push({
                name: this.name,
                age: this.age
            });
        },
        remove(index) {
            this.list.splice(index, 1);
        }
    }
});
app.mount('#app');