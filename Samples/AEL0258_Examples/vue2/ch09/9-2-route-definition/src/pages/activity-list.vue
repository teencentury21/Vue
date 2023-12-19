<template>
    <layout-content>
        <ul>
            <li class="title">活動清單</li>
            <li
                class="activity-item"
                v-for="(item, index) in activities"
                :key="index"
            >
                {{ item.name }}
            </li>
        </ul>
    </layout-content>
</template>

<script type="text/javascript">
import LayoutContent from '../components/layouts/layout-content.vue';
import axios from 'axios';

export default {
    name: 'PageActivityList',
    data: () => ({
        activities: [],
    }),
    async mounted() {
        const response = await axios.get('/api/activity/list');
        console.log(response)
        this.activities = response.data.data;
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