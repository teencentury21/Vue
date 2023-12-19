<template>
    <nav>
        <slot></slot>
    </nav>
</template>

<script type="text/javascript">
module.exports = {
    name: 'layout-menu',
    data: function() {
        return {};
    },
}
</script>

<style type="text/css">
nav {
    height: 65vh;
    width: 30%;
    float: left;
    background: #555;
    color: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>