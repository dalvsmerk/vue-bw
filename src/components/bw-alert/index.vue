<template>
    <div :class="['bw-alert', style]">
        <slot></slot>
    </div>
</template>

<script>
const alertTypes = [
    'default',
    'info',
    'success',
    'error',
];

export default {
    name: 'bw-alert',
    props: {
        /**
         * Type of alert,
         * one of `default`, `info`, `success`, `warning`, `error`
         */
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return alertTypes.indexOf(value) !== -1;
            },
        }
    },
    computed: {
        style() {
            return {
                [`bw-alert--${this.type}`]: this.type !== 'default',
            };
        },
    },
}
</script>

<style lang="scss" link="./bw-alert.scss"></style>

<docs>
```vue
<div>
    <bw-alert>Default alert</bw-alert>
    <bw-alert type="info">Info alert</bw-alert>
    <bw-alert type="success">Success alert</bw-alert>
    <bw-alert type="error">Error alert</bw-alert>
</div>
```
</docs>
