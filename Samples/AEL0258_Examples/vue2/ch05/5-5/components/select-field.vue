<template>
    <div class="form-group row">
        <label :for="columnId" class="col-sm-2 col-form-label">{{ columnName }}</label>
        <div class="col-sm-10">
            <select
                class="form-control"
                :id="columnId"
                v-model="modelValue"
            >
                <option value="">請選擇</option>
                <option v-for="(item, index) in items" :key="index" :value="item.value">{{ item.text }}</option>
            </select>
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    name: 'select-field',
    props: {
        value: {
            type: String,
            default: '',
        },
        columnName: {
            type: String,
            default: '',
        },
        columnId: {
            type: String,
            default: '',
        },
        items: {
            type: Array,
            default: [],
        }
    },
    computed: {
        modelValue: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        },
    },
}
</script>
