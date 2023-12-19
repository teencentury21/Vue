<template>
    <div class="form-group row">
        <label :for="columnId" class="col-sm-2 col-form-label">{{ columnName }}</label>
        <div class="col-sm-10">
            <input
                type="text"
                class="form-control"
                :id="columnId"
                :placeholder="placeholder"
                v-model="modelValue"
            />
        </div>
    </div>
</template>

<script type="text/javascript">
module.exports = {
    name: 'text-field',
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
        placeholder: {
            type: String,
            default: '',
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