<template>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">{{ columnName }}</label>
        <div class="col-sm-10">
            <!-- ---- (表單元件放置處) ---- -->
            <input
                type="text"
                class="form-control"
                :placeholder="placeholder"
                v-model="value"
            />
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    // ---- (設置元件名稱) ----
    name: 'text-field',
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
        placeholder: {
            type: String,
            default: '',
        }
    },
    computed: {
        // v-model用變數
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        },
    },
}
</script>