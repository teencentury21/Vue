<template>
    <layout-content>
        <ul>
            <li class="title">活動資訊</li>
            <li class="activity-item">活動名稱：{{ activity.name }}</li>
            <li class="activity-item">地點：{{ activity.place }}</li>
            <li class="activity-item">描述：{{ activity.description }}</li>
        </ul>
    </layout-content>
</template>

<script type="text/javascript">
import LayoutContent from '../components/layouts/layout-content.vue';
import axios from 'axios';

export default {
    name: 'PageActivityList',
    data: () => ({
        activity: {
            id: 1,
            name: "清水斷崖獨木舟日出團",
            place: "清水斷崖",
            description: ""
        },
    }),
    async mounted() {
        const id = this.$route.params.id;
        const response = await axios.get(`/api/activity/info/${id}`);
        console.log(response)
        this.activity = response.data.data;
    },
    components: {
        LayoutContent,
    },
}
</script>

<style type="text/css" scoped>
ul {
    text-align: left;
}
ul li.title {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}
ul li {
    list-style:none;
    margin-bottom: 0.25rem;
}
</style>