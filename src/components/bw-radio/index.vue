<template>
    <label class="bw-radio">
        <input
            type="radio"
            class="bw-radio__input"
            :name="name"
            :checked="checked"
            :disabled="disabled"
            @change="handleChange"
        >
        <div class="bw-radio__check"></div>
        <span class="bw-radio__label">
            <slot></slot>
        </span>
    </label>
</template>

<script>
export default {
    name: 'bw-radio',
    model: {
        prop: 'modelValue',
        event: 'change',
    },
    props: {
        /**
         * Name of radio group
         */
        name: {
            type: String,
            required: true,
        },
        /**
         * Value of radio input
         */
        value: {
            required: true,
        },
        /**
         * Model to be changed when radio is selected
         *
         * @model
         */
        modelValue: {
            required: true,
        },
        /**
         * Disables selection of radio
         */
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        checked() {
            return this.value === this.modelValue;
        },
    },
    methods: {
        handleChange() {
            /**
             * Radio selection event,
             * type of `value` and `v-model` props
             *
             * @event change
             * @type {any}
             */
            this.$emit('change', this.value);
        },
    },
}
</script>

<style lang="scss" link="./bw-radio.scss"></style>

<docs>
```vue
const mock = require('./mock.js').default();

<div>
    <bw-radio
        name="option"
        value="first"
        v-model="mock.value"
    >First</bw-radio>
    <bw-radio
        name="option"
        value="second"
        v-model="mock.value"
    >Second</bw-radio>
    <bw-radio
        name="option"
        value="third"
        :disabled="true"
        v-model="mock.value"
    >Third</bw-radio>
</div>
```
</docs>
