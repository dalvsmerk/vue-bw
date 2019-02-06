<template>
    <component :is="multiline ? 'textarea' : 'input'"
        :type="type"
        :class="['bw-input', style]"
        :value="value"
        @input="$emit('input', $event.target.value)"
    ></component>
</template>

<script>
export default {
    name: 'bw-input',
    props: ['type', 'value', 'multiline', 'icon'],
    data() {
        return {
            height: 48,
        };
    },
    computed: {
        style() {
            return {
                'bw-input--multiline': this.multiline,
            };
        },
    },
}
</script>

<style scoped>
.bw-input {
    border: 2px solid #000;
    outline: none;
    padding: 6px 12px;
    box-sizing: border-box;
    width: 100%;
    min-width: 100%;
    max-width: 100%;
    font-size: 12px;
}

.bw-input:focus {
    outline: 4px solid rgba(79, 193, 255, 0.6);
}

.bw-input--multiline {
    min-height: 48px;
}
</style>


