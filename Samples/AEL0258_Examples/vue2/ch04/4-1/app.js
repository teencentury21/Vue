var app = new Vue({
    el: '#app',
    data: {
        ntd: 100,
        usdRate: 31.22,
        jpnRate: 0.2788,
    },
    computed: {
        usd: function() {
            return Math.round(this.ntd / this.usdRate * 100) / 100;
        },
        jpn: function() {
            return Math.round(this.ntd / this.jpnRate * 100) / 100;
        },
    }
})