import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '../mocks/index.js';

createApp(App).use(router).mount('#app');
