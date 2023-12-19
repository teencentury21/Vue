var app = new Vue({
    el: "#app",
    data: {},
    components: {
        'layout-header': httpVueLoader('./components/layout-header.vue'),
        'layout-menu': httpVueLoader('./components/layout-menu.vue'),
        'layout-content': httpVueLoader('./components/layout-content.vue'),
        'layout-footer': httpVueLoader('./components/layout-footer.vue'),
    }
});
