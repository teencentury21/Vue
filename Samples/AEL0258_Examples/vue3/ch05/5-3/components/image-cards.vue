<template>
    <div class="image-card-container">
        <div class="card" v-for="(image, index) in imageList" :key="index" @click="clickImage(image.name)">
            <img :src="image.src" class="card-img-top">
            <div class="card-body">{{ image.name }}</div>
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    name: 'image-card',
    props: {
        imageList: {
            // 資料型態
            type: [ Array ],
            // 預設值 (父層使用元件時，未指定值則代入)
            default: [],
        },
    },
    methods: {
        clickImage(imageName) {
            this.$emit('click-image-card', imageName);
        }
    }
}
</script>

<style type="text/css">
.card {
    width: calc(20vw - 4rem - 0.5rem);
    float: left;
    margin: 1rem;
}
</style>