<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        HelloWorld
    },
    methods: {
        async getCityList() {
            const response = await axios.get('/api/cities');
            console.log('getCityList', response.data);
        },
        async getCityAreaList(areaCode) {
            const response = await axios.get(`/api/cities/${areaCode}/areas`);
            console.log('getCityAreaList', areaCode, response.data);
        }
    },
    mounted() {
        this.getCityList();
        this.getCityAreaList('A');
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
