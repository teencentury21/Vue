var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            list: []
        };
    },
    watch: {
        list: {
            handler: function(newList, oldList) {
                console.log('一般', this.$refs.ullist.offsetHeight);
                this.$nextTick(function() {
                    console.log('nextTick', this.$refs.ullist.offsetHeight);
                });
            },
            deep: true,
        }
    }
});
app.mount('#app');