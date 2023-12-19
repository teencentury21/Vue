<template>
    <layout-content>
        <span>Welcome Home Page</span>
    </layout-content>
</template>

<script type="text/javascript">
import LayoutContent from '../components/layouts/layout-content.vue';

export default {
    name: 'PageHome',
    data: function() {
        return {};
    },
    components: {
        LayoutContent,
    },
}
</script>

<style type="text/css" scoped>
span {
    font-size: 2rem;
}
</style>