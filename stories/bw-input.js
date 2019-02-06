import { storiesOf } from '@storybook/vue';
import BwInput from '../src/components/bw-input';

const defaultInstance = {
    components: {
        'bw-input': BwInput,
    },
    data() {
        return {
            value: '',
        };
    },
    template: '<bw-input v-model="value"></bw-input>'
};

const multilineInstance = Object.assign({}, defaultInstance, {
    template: `<bw-input v-model="value" :multiline="true"></bw-input>`
});

storiesOf('bw-input', module)
    .add('default', () => defaultInstance)
    .add('multiline', () => multilineInstance);
