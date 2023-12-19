<template>
    <layout-content>
        <ul>
            <li class="title">活動資訊</li>
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
            place: "清水斷崖"
        },
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

</style>