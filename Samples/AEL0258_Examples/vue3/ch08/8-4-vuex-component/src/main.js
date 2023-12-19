import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '../mocks/index.js';

createApp(App).use(store).mount('#app');
