<template>
    <header>
        <slot></slot>
    </header>
</template>

<script type="text/javascript">
module.exports = {
    name: 'layout-header',
    data: function() {
        return {};
    },
}
</script>


<style type="text/css">
header {
    height: 25vh;
    width: 100%;
    float: left;
    background: #666;
    color: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>