<template>
    <div id="index">
        <b-row id="nav">
            <b-col col="11">
                <router-link to="/">
                    <b-icon icon="arrow-bar-up"></b-icon>
                </router-link> |
                <router-link to="/query">Query</router-link> |
                <router-link to="/about">About</router-link>
            </b-col>
            <b-col col="1">
                <b-dropdown id="dropdown_lan" text="">
                    <b-dropdown-item>中文</b-dropdown-item>
                    <b-dropdown-item>English</b-dropdown-item>
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