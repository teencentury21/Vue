var app = Vue.createApp({
    data: function() {
        return {
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
        };
    },
    computed: {
        fields: function() {
            return [
                { component_name: 'text-field', id: 'fullName', column_name: '姓名', placeholder:'請輸入您的姓名' },
                { component_name: 'radio-box', id: 'gender', column_name: '性別', items: this.gender },
                { component_name: 'text-field', id: 'tel', column_name: '聯絡電話', placeholder:'電話格式：(xx)xxxx-xxxx' },
                { component_name: 'check-box', id: 'willingness', column_name: '想參加的活動', items: this.activities },
                { component_name: 'select-field', id: 'transportation', column_name: '交通方式', items: this.transportations },
            ];
        },
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
        'text-field': Vue.defineAsyncComponent(() => loadModule('./components/text-field.vue', options)),
        // 單選選單元件
        'select-field': Vue.defineAsyncComponent(() => loadModule('./components/select-field.vue', options)),
        // 單選選單元件
        'radio-box': Vue.defineAsyncComponent(() => loadModule('./components/radio-box.vue', options)),
        // 複選選單元件
        'check-box': Vue.defineAsyncComponent(() => loadModule('./components/check-box.vue', options)),
    }
});
app.mount('#app');