<template>
    <div :class="`image-card-container-${visibleNumber}`">
        <div class="card" v-for="(image, index) in visibleList" :key="index">
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
        visibleNumber: {
            // 資料型態
            type: [ Number, String ],
            // 預設值 (父層使用元件時，未指定值則代入)
            default: 3,
            // 驗證父層給予的值
            validator: function (value) {
                return value > 0 && value <= 5
            },
        }
    },
    computed: {
        visibleList() {
            const self = this;
            let list = [];
            this.imageList.forEach(function(item, index) {
                if(self.visibleNumber > index) {
                    list.push(item);
                }
            })
            return list;
        }
    }
}
</script>

<style type="text/css">
.image-card-container-1 .card { width: calc(100vw - 4rem - 0.5rem); }
.image-card-container-2 .card { width: calc(50vw - 4rem - 0.5rem); }
.image-card-container-3 .card { width: calc(33vw - 6rem - 0.5rem); }
.image-card-container-4 .card { width: calc(25vw - 6rem - 0.5rem); }
.image-card-container-5 .card { width: calc(30vw - 12rem - 0.5rem); }

.card {
    float: left;
    margin: 1rem;
}
</style>