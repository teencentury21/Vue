<template>
    <div id="index">
        <b-row id="nav">
            <b-col col="11">
                <router-link to="/">
                    <b-icon icon="arrow-bar-up"></b-icon>
                </router-link> |
                <router-link to="/query">{{ $t('menu.query') }}</router-link> |
                <router-link to="/about">{{ $t('menu.about') }}</router-link>
            </b-col>
            <b-col col="1">
                <b-dropdown id="dropdown_lang" v-bind:text="$t('dropdownLang.title')">
                    <b-dropdown-item data-lang="zhtw" @click="setLang">{{$t('dropdownLang.zhtw')}}</b-dropdown-item>
                    <b-dropdown-item data-lang="zhcn" @click="setLang">{{$t('dropdownLang.zhcn')}}</b-dropdown-item>
                    <b-dropdown-item data-lang="en" @click="setLang">{{$t('dropdownLang.en')}}</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>
        <hr />
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'index',
        components: {

        },
        methods: {
            setActiveLanguage(lang) {
                localStorage.setItem('footmark-lang', lang)
            },
            setLang(evt) {
                const lang = evt.target.dataset.lang
                this.setActiveLanguage(lang)
                return history.go(0)
            },
        }    
    }
</script>
<style lang="scss">
    #index {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>