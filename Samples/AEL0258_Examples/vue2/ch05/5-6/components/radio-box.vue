<template>
    <fieldset class="form-group row">
        <legend class="col-form-label col-sm-2 float-sm-left pt-0">{{ columnName }}</legend>
        <div class="col-sm-10">
            <div
                class="form-check"
                v-for="(item, index) in items"
                :key="index"
            >
                <input
                    class="form-check-input"
                    type="radio"
                    :name="columnId"
                    :id="`${columnId}-${index}`"
                    :value="item.value"
                    v-model="modelValue"
                />
                <label class="form-check-label" :for="`${columnId}-${index}`">
                    {{ item.text }}
                </label>
            </div>
        </div>
    </fieldset>
</template>

<script type="text/javascript">
module.exports = {
    name: 'radio-box',
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