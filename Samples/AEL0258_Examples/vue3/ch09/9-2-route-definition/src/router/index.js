import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const router = new createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes
})

export default router;