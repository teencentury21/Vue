var app = Vue.createApp({
    // Vue.js 資料模型
    data: function() {
        return {
            el: {
                width: 'N/A',
                height: 'N/A',
            },
            ref: {
                width: 'N/A',
                height: 'N/A',
            }
        };
    },
    // 當元件掛載完成時
    mounted() {
        console.log(this.$el)
        // $el 裡的文字顏色改為 #666
        this.$el.parentElement.style.color = '#666';
        // 取得 $el 的寬/高
        this.el.width = this.$el.parentElement.clientWidth || 'N/A';
        this.el.height = this.$el.parentElement.clientHeight || 'N/A';
        // $refs['ref-example'] 裡的文字顏色改為 #999
        this.$refs['ref-example'].style.color = '#999';
        // 取得 $refs['ref-example'] 的寬/高
        this.ref.width = this.$refs['ref-example'].clientWidth || 'N/A';
        this.ref.height = this.$refs['ref-example'].clientHeight || 'N/A';
    }
});
app.mount('#app');