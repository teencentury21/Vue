<template>
    <div id="app">
        <layout-header> Vue i18n </layout-header>
        <layout-content>
            <div>
                選擇語言：<select v-model="selectLang">
                    <option
                        v-for="(item, index) in langs"
                        :key="index"
                        :value="item.value"
                    >
                        {{ item.text }}
                    </option>
                </select><br/><br/>
                <div>{{ $t('HI', ['John']) }}</div>
                <div>{{ $t('HELLO_WORLD') }}</div>
            </div>
        </layout-content>
        <layout-footer> Copyright &copy; Test Inc. </layout-footer>
    </div>
</template>

<script>
import layoutHeader from './components/layouts/layout-header.vue';
import layoutContent from './components/layouts/layout-content.vue';
import layoutFooter from './components/layouts/layout-footer.vue';

export default {
    name: 'App',
    data: () => ({
        selectLang: 'en',
        langs: [
            { text: '繁體中文', value:'zh_TW' },
            { text: 'English', value:'en' },
            { text: '日本語', value:'ja' },
        ],
    }),
    watch: {
        'selectLang': function(newValue) {
            this.$i18n.locale = newValue;
        }
    },
    components: {
        layoutHeader, layoutContent, layoutFooter,
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