import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import './plugins/bootstrap-vue'
import App from './views/Index.vue'
import router from './router/index'
import store from './store'

// bootstrap
import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// I18n
import VueI18n from 'vue-i18n'
//import lan from './i18n/lan'

import en from './i18n/en.json'
import zhtw from './i18n/zhtw.json'
import zhcn from './i18n/zhcn.json'

Vue.use(VueI18n)
let locale='zhtw'
if(localStorage.getItem('footmark-lang')){
  locale=localStorage.getItem('footmark-lang');
  store.commit('setLang',locale);
}else{
  store.commit('setLang',locale);
}
const i18n=new VueI18n({
  locale:locale,
  messages:{
    'zhtw':zhtw,
    'zhcn':zhcn,
    'en':en
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')