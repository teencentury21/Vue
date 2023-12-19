<template>
    <footer>
        <slot></slot>
    </footer>
</template>

<script type="text/javascript">
export default {
    name: 'layout-footer',
    data: function() {
        return {};
    },
}
</script>


<style type="text/css">
footer {
    height: 10vh;
    width: 100%;
    float: left;
    background: #333;
    color: #fefefe;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>