import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    lang:null, // User choosen on language
    count:0
  },
  getters:{
    getLang:state=>{
      return state.lang;
    }
  },
  mutations: {
    increment(state){
      state.count++
    },
    setLang(state, value){
      state.lang=value;
    }
  },
  actions: {
  },
  modules: {
  }
})
