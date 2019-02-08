<template>
    <label :class="['bw-checkbox', style]">
        <input
            type="checkbox"
            class="bw-checkbox__input"
            :checked="checked"
            :disabled="disabled"
            @change="handleChange"
        >
        <div class="bw-checkbox__check"></div>
        <span class="bw-checkbox__label">{{ label }}</span>
    </label>
</template>

<script>
export default {
    name: 'bw-checkbox',
    model: {
        prop: 'checked',
        event: 'change',
    },
    props: {
        /**
         * Determines the current check state
         *
         * @model
         */
        checked: {
            type: Boolean,
            required: true,
        },
        /**
         * Label of checkbox
         */
        label: {
            type: String,
            required: true,
        },
        /**
         * Disables all events
         */
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        style() {
            return {
                'bw-checkbox--disabled': this.disabled,
            };
        },
    },
    methods: {
        handleChange(event) {
            /**
             * Change event
             *
             * @event input
             * @type {boolean}
             */
            this.$emit('change', event.target.checked);
        },
    },
}
</script>

<style lang="scss" link="./bw-checkbox.scss"></style>

<docs>
```vue
const mockDefault = require('./mock').default();
const mockDisabled = require('./mock').default();
mockDisabled.disabled = true;

<div>
    <bw-checkbox label="Label" v-model="mockDefault.checked"></bw-checkbox>
    <bw-checkbox
        label="Label"
        v-model="mockDisabled.checked"
        :disabled="mockDisabled.disabled"
    ></bw-checkbox>
</div>
```
</docs>
