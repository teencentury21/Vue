import Vue from 'vue'
import myPlugin from './packages/my-plugin';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(myPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
