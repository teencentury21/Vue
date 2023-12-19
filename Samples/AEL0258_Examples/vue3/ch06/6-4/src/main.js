import { createApp } from 'vue';
import myPlugin from './packages/my-plugin';
import App from './App.vue'


createApp(App)
  .use(myPlugin)
  .mount('#app')