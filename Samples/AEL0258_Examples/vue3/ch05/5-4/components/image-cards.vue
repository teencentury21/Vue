<template>
    <div class="image-card-container">
        <div
            class="card"
            :class="{ dark: isDark }"
            v-for="(image, index) in imageList"
            :key="index"
        >
            <img :src="image.src" class="card-img-top">
            <div class="card-body">{{ image.name }}</div>
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    name: 'image-card',
    data: function() {
        return {
            isDark: false,
        };
    },
    props: {
        imageList: {
            // 資料型態
            type: [ Array ],
            // 預設值 (父層使用元件時，未指定值則代入)
            default: [],
        },
    },
    methods: {
        changeBlackStyle() {
            this.isDark = true;
        }
    }
}
</script>

<style type="text/css">
.image-card-container {
    width: 100%;
    float: left;
}
.card {
    width: calc(33vw - 2rem - 0.5rem);
    float: left;
    margin: 1rem;
}
.card.dark .card-body {
    background: #333;
    color: #fefefe;
}
</style>