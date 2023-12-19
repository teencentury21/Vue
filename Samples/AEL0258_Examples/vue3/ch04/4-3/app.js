var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            mainID: '',
            subID: '',
            currentSubList: [],
            typeList: [{
                    id: 1,
                    name: '飲料',
                    sub: [
                        { id: 1, name: '紅茶' },
                        { id: 2, name: '綠茶' },
                        { id: 3, name: '麥茶' },
                    ]
                },
                {
                    id: 2,
                    name: '蛋糕',
                    sub: [
                        { id: 1, name: '蜂密蛋糕' },
                        { id: 2, name: '起士蛋糕' },
                        { id: 3, name: '巧克力蛋糕' },
                    ]
                },
                {
                    id: 3,
                    name: '麵包',
                    sub: [
                        { id: 1, name: '吐司' },
                        { id: 2, name: '肉松麵包' },
                    ]
                },
            ]
        };
    },
    watch: {
        mainID: function(newID, oldID) {
            if(newID == '') {
                this.currentSubList = [];
            } else {
                const tempItem = this.typeList.find( typeItem => {
                    return typeItem.id == newID;
                })
                this.currentSubList = tempItem.sub;
            }
        }
    }
});
app.mount('#app');