var app = Vue.createApp({
    data: function() {
        return {};
    },
    components: {
        'layout-header': Vue.defineAsyncComponent(() => loadModule('./components/layout-header.vue', options)),
        'layout-menu': Vue.defineAsyncComponent(() => loadModule('./components/layout-menu.vue', options)),
        'layout-content': Vue.defineAsyncComponent(() => loadModule('./components/layout-content.vue', options)),
        'layout-footer': Vue.defineAsyncComponent(() => loadModule('./components/layout-footer.vue', options)),
    }
});
app.mount('#app');