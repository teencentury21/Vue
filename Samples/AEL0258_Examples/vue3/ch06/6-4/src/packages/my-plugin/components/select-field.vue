<template>
    <div class="form-group row">
        <label class="col-sm-2 col-form-label">{{ columnName }}</label>
        <div class="col-sm-10">
            <!-- ---- (表單元件放置處) ---- -->
            <select
                class="form-control"
                v-model="value"
            >
                <option value="">請選擇</option>
                <option
                    v-for="(item, index) in items"
                    :key="index"
                    :value="item.value"
                >
                    {{ item.text }}
                </option>
            </select>
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    // ---- (設置元件名稱) ----
    name: 'select-field',
    props: {
        // v-model用屬性
        modelValue: {
            type: [String, Number],
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
                this.$emit('update:modelValue', value)
            }
        },
    },
}
</script>
