var app = new Vue({
    el: "#app",
    data: {
        form: {
            fullName: '',
            gender: '',
            tel: '',
            willingness: [],
            transportation: '',
        },
        gender: [
            { text: '男', value: 'male', },
            { text: '女', value: 'female', },
        ],
        activities: [
            { text: '唱歌', value: '唱歌' },
            { text: '烤肉', value: '烤肉' },
            { text: '桌遊', value: '桌遊' },
            { text: '看展', value: '看展' },
        ],
        transportations: [
            { text: '搭遊覽車', value: '搭遊覽車' },
            { text: '自行騎車', value: '自行騎車' },
            { text: '自行開車', value: '自行開車' },
        ],
        isAlreadySend: false,
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
        send() {
            this.isAlreadySend = true;
        },
    },
    components: {
        'text-field': httpVueLoader('./components/text-field.vue'),
        'select-field': httpVueLoader('./components/select-field.vue'),
        'radio-box': httpVueLoader('./components/radio-box.vue'),
        'check-box': httpVueLoader('./components/check-box.vue'),
    }
});
