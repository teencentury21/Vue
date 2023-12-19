var app = new Vue({
    el: "#app",
    data: {
        // 表單資訊
        form: {
            fullName: '',
            gender: '',
            tel: '',
            willingness: [],
            transportation: '',
        },
        // 顯示資訊
        show: false,
        // 性別選單項目
        gender: [
            { text: '男', value: '男', },
            { text: '女', value: '女', },
        ],
        // 活動選單項目
        activities: [
            { text: '唱歌', value: '唱歌' },
            { text: '烤肉', value: '烤肉' },
            { text: '桌遊', value: '桌遊' },
            { text: '看展', value: '看展' },
        ],
        // 交通方式選單項目
        transportations: [
            { text: '搭遊覽車', value: '搭遊覽車' },
            { text: '自行騎車', value: '自行騎車' },
            { text: '自行開車', value: '自行開車' },
        ],
    },
    methods: {
        // 送出
        send() {
            this.show = {
                fullName: this.form.fullName,
                gender: this.form.gender,
                tel: this.form.tel,
                willingness: this.form.willingness,
                transportation: this.form.transportation,
            };
        },
    },
    components: {
        // 文字方塊元件
        'text-field': httpVueLoader('./components/text-field.vue'),
        // 單選選單元件
        'select-field': httpVueLoader('./components/select-field.vue'),
        // 單選選單元件
        'radio-box': httpVueLoader('./components/radio-box.vue'),
        // 複選選單元件
        'check-box': httpVueLoader('./components/check-box.vue'),
    }
});
