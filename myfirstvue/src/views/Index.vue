<template>
    <div id="index">         
        <b-row id="nav">
            <b-col cols="11" class="">
                <router-link to="/">
                    <b-icon icon="arrow-bar-up"></b-icon>
                </router-link> |
                <router-link to="/query">{{ $t('menu.query') }}</router-link> |
                <router-link to="/about">{{ $t('menu.about') }}</router-link>
            </b-col>
            <b-col cols="1">                
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
            setLang(event) {                
                let lang = event.target.getAttribute('data-lang');
                //將所選語系代碼存入store中
                this.$store.commit('setLang', lang);
                //讓i18n多語系套件切換至所選語系
                this.$i18n.locale = this.$store.getters.getLang;
                //將所選語系代碼存入localStorage
                localStorage.setItem('footmark-lang', lang);
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
        align-content: start;
        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>