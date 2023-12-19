var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            lastName: '',
            firstName: '',
            postNo: '220',
            city: '新北市',
            area: '板橋區',
            address: '中山路一段161號'
        };
    },
    computed: {
        fullName: {
            get() {
                return this.lastName || this.firstName ? this.lastName + ' ' + this.firstName : '';
            },
            set(newValue) {
                if(newValue.split(' ').length === 2) {
                    [this.lastName, this.firstName] = newValue.split(' ')
                }
            },
        },
        fullAddress() {
            return this.postNo + ' ' + this.city + ' ' + this.area + ' ' + this.address;
        }
    },
    mounted() {
        this.fullName = '陳 小明';
    }
});
app.mount('#app');