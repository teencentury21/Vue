<template>
    <section>
        <slot></slot>
    </section>
</template>

<script type="text/javascript">
module.exports = {
    name: 'layout-content',
    data: function() {
        return {};
    },
}
</script>

<style type="text/css">
section {
    height: 65vh;
    width: 70%;
    float: left;
    background: #444;
    color: #fefefe;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>