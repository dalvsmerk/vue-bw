<template>
    <button
        :class="['bw-button', style]"
        :disabled="disabled"
        v-on="$listeners"
    >
        <!-- @slot Button content -->
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'bw-button',
    props: {
        /**
         * Disables all events on button
         */
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
         * Makes button black
         */
        inverted: {
            type: Boolean,
            default: false,
        },
        /**
         * Increases button size
         */
        large: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        style() {
            return {
                'bw-button--inverted': this.inverted,
                'bw-button--large': this.large,
            };
        },
    },
}
</script>

<style lang="scss" link="./bw-button.scss"></style>

<docs>
default:
```vue
<div>
    <bw-button>Default</bw-button>
    <bw-button :disabled="true">Default disabled</bw-button>
</div>
```

inverted:
```vue
<div>
    <bw-button :inverted="true">Inverted</bw-button>
    <bw-button :inverted="true" :disabled="true">Inverted disabled</bw-button>
</div>
```

large default:
```vue
<div>
    <bw-button :large="true">Large</bw-button>
    <bw-button :large="true" :disabled="true">Large disabled</bw-button>
</div>
```

large inverted:
```vue
<div>
    <bw-button :large="true" :inverted="true">Large</bw-button>
    <bw-button
        :large="true"
        :inverted="true"
        :disabled="true"
    >
        Large inverted disabled
    </bw-button>
</div>
```
</docs>
