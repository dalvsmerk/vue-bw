<template>
    <div class="bw-button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'bw-button-group',
}
</script>

<style lang="scss" link="./bw-button-group.scss"></style>

<docs>
```vue
<bw-button-group>
    <bw-button>Home</bw-button>
    <bw-button>About</bw-button>
    <bw-button>Contact</bw-button>
</bw-button-group>
```
</docs>
