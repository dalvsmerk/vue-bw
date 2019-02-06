<template>
    <button
        :class="['bw-button', style]"
        :disabled="disabled"
        v-on="$listeners"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'bw-button',
    props: ['disabled', 'inverted', 'large'],
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

<style scope>
.bw-button {
    border: 2px solid #000;
    background: #fff;
    outline: none;
    padding: 6px 12px;
    color: #000;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    box-sizing: border-box;
}

.bw-button:focus {
    outline: 4px solid rgba(79, 193, 255, 0.6);
}

.bw-button:hover {
    opacity: 0.5;
}

.bw-button:disabled {
    border-color: #bbb;
    color: #bbb;
    pointer-events: none;
}

.bw-button--inverted {
    background: #000;
    color: #fff;
}

.bw-button--inverted:disabled {
    background: #bbb;
    color: #fff;
}

.bw-button--large {
    font-size: 16px;
    padding: 10px 16px;
}
</style>
