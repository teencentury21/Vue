<template>
    <section class="content">
        <slot></slot>
    </section>
</template>

<script type="text/javascript">
export default {
    name: 'layout-content',
    data: function() {
        return {};
    },
}
</script>

<style type="text/css" scoped>
section.content {
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #999;
}
</style>