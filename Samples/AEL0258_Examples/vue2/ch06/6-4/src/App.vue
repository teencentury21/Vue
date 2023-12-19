<template>
    <div id="app">
        <h4>活動報名表單</h4>
        <form>
            <component
                v-for="(info, index) in fields"
                :key="index"
                :is="info.component_name"
                :column-id="info.id"
                :column-name="info.column_name"
                :items="info.items"
                :placeholder="info.placeholder"
                v-model="form[info.id]"
            ></component>
            <button type="button" class="btn btn-primary" @click="send">送出</button>
        </form>
        <div class="form-info" v-if="show">
            送出表單資訊：
            <ul>
                <li>姓名：{{ show.fullName }}</li>
                <li>性別：{{ show.gender }}</li>
                <li>聯絡電話：{{ show.tel }}</li>
                <li>想參加的活動：{{ show.willingness.join(',') }}</li>
                <li>交通方式：{{ show.transportation }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data: () => ({
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
    }),
    computed: {
        fields: function() {
            return [
                {
                    component_name: 'text-field',
                    id: 'fullName',
                    column_name: '姓名',
                    placeholder: '請輸入您的姓名'
                },
                {
                    component_name: 'radio-box',
                    id: 'gender',
                    column_name: '性別',
                    items: this.gender
                },
                {
                    component_name: 'text-field',
                    id: 'tel',
                    column_name: '聯絡電話',
                    placeholder: '電話格式：(xx)xxxx-xxxx'
                },
                {
                    component_name: 'check-box',
                    id: 'willingness',
                    column_name: '想參加的活動',
                    items: this.activities
                },
                {
                    component_name: 'select-field',
                    id: 'transportation',
                    column_name: '交通方式',
                    items: this.transportations
                },
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
}
</script>

<style>
#app {
    padding: 1rem;
}

.form-info {
    padding-top: 3rem;
    font-size: 1.25rem;
}
</style>