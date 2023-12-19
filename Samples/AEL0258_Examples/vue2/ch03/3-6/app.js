var vm = new Vue({
    el: "#app",
    data: {
        top: 0,
        left: 0,
    },
    methods: {
        goDown(value) {
            this.top += value;
        },
        goRight(value) {
            console.log('goRight', value)
            this.left += value;
            console.log('goRight', this.left)
        }
    }
})