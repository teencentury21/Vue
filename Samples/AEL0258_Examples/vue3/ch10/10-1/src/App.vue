<template>
    <div id="app">
        <layout-header>
            Vue i18n
        </layout-header>
        <layout-content>
          {{ $t('HELLO_WORLD') }}
        </layout-content>
        <layout-footer>
            Copyright &copy; Test Inc.
        </layout-footer>
    </div>
</template>

<script>
import layoutHeader from './components/layouts/layout-header.vue';
import layoutContent from './components/layouts/layout-content.vue';
import layoutFooter from './components/layouts/layout-footer.vue';

export default {
    name: 'App',
    components: {
        layoutHeader,
        layoutContent,
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
a {
    text-decoration: none;
}
.page-link {
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    background: #eee;
    color: #333;
}
</style>