var app = new Vue({
    el: '#app',
    data: {
        list: []
    },
    watch: {
        list: function(newList, oldList) {
            console.log('一般', this.$refs.ullist.offsetHeight);
            this.$nextTick(function() {
                console.log('nextTick', this.$refs.ullist.offsetHeight);
            });
        }
    }
})