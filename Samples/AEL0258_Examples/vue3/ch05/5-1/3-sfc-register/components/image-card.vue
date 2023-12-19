<template>
    <div class="card">
        <img :src="src" class="card-img-top">
        <div class="card-body">{{ name }}</div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    name: 'image-card',
    props: ['src', 'name']
}
</script>