<template>
    <label :class="['bw-input-label', { 'bw-input-label--disabled': disabled }]">
        <span v-if="label" class="bw-input-label__title">{{ label }}</span>
        <component
            :is="multiline ? 'textarea' : 'input'"
            ref="input"
            :type="type"
            :class="['bw-input', style]"
            :value="value"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            v-on="inputListeners"
        ></component>
    </label>
</template>

<script>
export default {
    name: 'bw-input',
    props: {
        /**
         * Type of input
         */
        type: {
            type: String,
            default: 'text',
        },
        /**
         * @model
         */
        value: {
            type: [String, Number],
            required: true,
        },
        /**
         * Label of input
         */
        label: String,
        /**
         * Placeholder text
         */
        placeholder: String,
        /**
         * Renders textarea if true
         */
        multiline: {
            type: Boolean,
            default: false,
        },
        /**
         * Disables text edit if true
         */
        readonly: {
            type: Boolean,
            default: false,
        },
        /**
         * Disables input
         */
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        style() {
            return {
                'bw-input--multiline': this.multiline,
            };
        },
        inputListeners() {
            return {
                ...this.$listeners,
                input: event => {
                    const targetValue = event.target.value;

                    const value = this.type === 'number'
                        ? Number(targetValue)
                        : targetValue;
                    /**
                     * Input event
                     *
                     * @event input
                     * @type {(string|number)}
                     */
                    this.$emit('input', value);
                },
            };
        },
    },
}
</script>

<style lang="scss" link="./bw-input.scss"></style>

<docs>
default:
```vue
const mockDefault = require('./mock').default();
const mockDisabled = require('./mock').default();

<div>
    <bw-input
        v-model="mockDefault.value"
        label="Label"
        placeholder="Example"
    ></bw-input>
    <bw-input
        v-model="mockDisabled.value"
        label="Label"
        placeholder="Example"
        :disabled="true"
    ></bw-input>
</div>
```
multiline:
```vue
const mock = require('./mock').default();

<bw-input
    v-model="mock.value"
    label="Label"
    placeholder="Example"
    :multiline="true"
></bw-input>
```
</docs>
