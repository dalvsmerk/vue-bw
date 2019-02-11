<template>
    <div :class="['bw-dropdown', { 'bw-dropdown--disabled': disabled }]">
        <bw-input
            v-model="selectedKey"
            ref="input"
            :label="label"
            :placeholder="placeholder"
            :disabled="disabled"
            readonly
            @focus="openList"
            @keydown.escape="closeList"
            @keydown.enter="handleEnter"
            @keydown.prevent.up="decreaseSelectedPairIndex"
            @keydown.prevent.down="increaseSelectedPairIndex"
        ></bw-input>
        <div class="bw-dropdown__container">
            <transition name="bw-fade">
                <ul v-if="isListOpen" class="bw-dropdown__list bw-dropdown-list">
                    <li
                        v-for="(pair, index) in list"
                        :class="['bw-dropdown-list__item', {
                            'bw-dropdown-list__item--selected': index === selectedPairIndex,
                        }]"
                        :key="pair.key"
                        @click="handleClick(pair.value, index)"
                        @mouseover="selectedPairIndex = index"
                    >
                        {{ pair.key }}
                    </li>
                </ul>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bw-dropdown',
    model: {
        prop: 'value',
        event: 'change',
    },
    props: {
        /**
         * List of values `{ key, value }`
         */
        list: {
            type: Array,
            required: true,
        },
        /**
         * Value to be selected
         *
         * @model
         */
        value: {
            required: true,
        },
        /**
         * Renders when nothing is selected
         */
        placeholder: {
            type: String,
        },
        /**
         * Title of dropdown
         */
        label: {
            type: String,
        },
        /**
         * Disables dropdown if true
         */
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            isListOpen: false,
            selectedPairIndex: 0,
        };
    },
    computed: {
        selectedKey() {
            const pair = this.list.find(pair => pair.value === this.value);

            if (pair) {
                return pair.key;
            }

            return this.placeholder;
        },
    },
    created() {
        document.addEventListener('click', this.handleDocumentClick);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleDocumentClick);
    },
    methods: {
        handleEnter() {
            const pair = this.list[this.selectedPairIndex];
            this.emitValue(pair.value);
        },
        handleClick(value, index) {
            this.selectedPairIndex = index;
            this.emitValue(value);
        },
        handleDocumentClick(event) {
            if (event.target.nodeName !== 'INPUT') {
                this.closeList();
            }
        },
        openList() {
            this.isListOpen = true;
        },
        closeList() {
            this.isListOpen = false;
            this.$refs.input.$refs.input.blur();
        },
        increaseSelectedPairIndex() {
            const index = this.selectedPairIndex;
            this.selectedPairIndex = index === (this.list.length - 1)
                ? 0
                : index + 1;
        },
        decreaseSelectedPairIndex() {
            const index = this.selectedPairIndex;
            this.selectedPairIndex = index === 0
                ? this.list.length - 1
                : index - 1;
        },
        emitValue(value) {
            /**
             * Current value change event
             *
             * @event change
             * @type {any}
             */
            this.$emit('change', value);
            this.closeList();
        }
    },
}
</script>

<style lang="scss" link="./bw-dropdown.scss"></style>

<docs>
```vue
const mockDefault = require('./mock').default();
const mockDisabled = require('./mock').default();

<div>
    <bw-dropdown
        v-model="mockDefault.value"
        label="Dropdown"
        placeholder="Select a value"
        :list="mockDefault.list"
    ></bw-dropdown>
    <bw-dropdown
        v-model="mockDisabled.value"
        label="Dropdown"
        placeholder="Select a value"
        :list="mockDisabled.list"
        :disabled="true"
    ></bw-dropdown>
</div>
```
</docs>
