var app = new Vue({
    el: '#app',
    data: {
        buyList: [],
        showList: [],
        totalPrice: 0,
        selectPorduction: '',
        productions: [
            { id: 1, name: '紅茶', price: 30 },
            { id: 2, name: '綠茶', price: 25 },
            { id: 3, name: '奶茶', price: 40 },
            { id: 4, name: '珍珠奶茶', price: 50 },
            { id: 5, name: '咖啡', price: 35 },
        ],
    },
    methods: {
        buy: function() {
            if(this.selectPorduction !== '') {
                this.buyList.push(this.selectPorduction);
                this.selectPorduction = '';
            }
        }
    },
    watch: {
        buyList: {
            handler: function(changeList, oldList) {
                let total = 0;
                let showList = [];
                const prods = this.productions;
                changeList.forEach( productionID => {
                    const selectProd = prods.find( production => {
                        return production.id == productionID;
                    })
                    if(selectProd.price !== undefined) {
                        total += selectProd.price;
                        showList.push(selectProd);
                    }
                });
                this.showList = showList;
                this.totalPrice = total;
            },
            deep: true,
        }
    }
})