<template>
    <section class="content">
        <div class="area-1">
            <slot name="area-1" :info="{ name: 'area-1' }"></slot>
        </div>
        <div class="default-area">
            <slot></slot>
        </div>
        <div class="area-2">
            <slot name="area-2" :info="{ name: 'area-2' }"></slot>
        </div>
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
}
section.content div {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.area-1 {
    background: #999;
    color: #FEFEFE;
}
.area-2 {
    background: #AAA;
    color: #FEFEFE;
}
.default-area {
    background: #888;
    color: #FEFEFE;
}
</style>