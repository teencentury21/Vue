import Home from '../pages/home.vue';
import ActivityList from '../pages/activity-list.vue';
import ActivityInfo from '../pages/activity-info.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/activity/list', component: ActivityList },
    { path: '/activity/info/:id', component: ActivityInfo },
];

export default routes;