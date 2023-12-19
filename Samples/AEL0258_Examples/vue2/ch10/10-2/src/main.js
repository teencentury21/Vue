import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n
}).$mount('#app')
