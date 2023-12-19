<template>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">{{ columnName }}</label>
        <div class="col-sm-10">
            <!-- ---- (表單元件放置處) ---- -->
            <div
                class="form-check"
                v-for="(item, index) in items"
                :key="index"
            >
                <input
                    class="form-check-input"
                    type="checkbox"
                    :value="item.value"
                    v-model="value"
                />
                <label class="form-check-label">
                    {{ item.text }}
                </label>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    // ---- (設置元件名稱) ----
    name: 'check-box',
    props: {
        // v-model用屬性
        modelValue: {
            type: String,
            default: '',
        },
        // 欄位名稱屬性
        columnName: {
            type: String,
            default: '',
        },
        // ---- (以下可放客製化元件屬性) ----
        items: {
            type: Array,
            default: [],
        }
    },
    computed: {
        // v-model用變數
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                console.log(value);
                this.$emit('update:modelValue', value)
            }
        },
    },
}
</script>