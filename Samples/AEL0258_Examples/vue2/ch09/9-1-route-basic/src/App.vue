<template>
    <div id="app">
        <layout-header>
            <router-link to="/" class="page-link">Home</router-link>
            <router-link to="/activity/list" class="page-link">活動清單</router-link>
        </layout-header>
        <router-view></router-view>
        <layout-footer>
            Copyright &copy; Test Com.
        </layout-footer>
    </div>
</template>

<script>
import layoutHeader from './pages/layouts/layout-header.vue';
import layoutFooter from './pages/layouts/layout-footer.vue';

export default {
    name: 'App',
    components: {
        layoutHeader,
        layoutFooter,
    }
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
}
.page-link {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    background: #eee;
    color: #333;
}
</style>