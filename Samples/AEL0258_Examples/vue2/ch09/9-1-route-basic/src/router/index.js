import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    history: process.env.BASE_URL,
    routes: [
        // 定義路由
    ],
})

export default router;