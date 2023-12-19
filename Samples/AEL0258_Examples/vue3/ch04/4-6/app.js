var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            phone: '0933444888',
            tel: '0233334444',
        };
    },
    computed: {
        formatedPhone() {
            return this.phoneFormater(this.phone);
        },
    },
    methods: {
        phoneFormater(originPhone) {
            let formatNumber = '';
            formatNumber += originPhone.substr(0, 4);
            formatNumber += '-';
            formatNumber += originPhone.substr(4, 3);
            formatNumber += '-';
            formatNumber += originPhone.substr(7, 3);

            return formatNumber;
        },
        telFormater(originTel) {
            let formatNumber = '';
            formatNumber += originTel.substr(0, 2);
            formatNumber += '-';
            formatNumber += originTel.substr(2, 4);
            formatNumber += '-';
            formatNumber += originTel.substr(6, 4);

            return formatNumber;
        },
    },
});
app.mount('#app');