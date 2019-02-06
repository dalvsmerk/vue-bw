import { storiesOf } from '@storybook/vue';

storiesOf('bw-button', module)
    .add('default', () => '<bw-button @click="() => {}">button</bw-button>')
    .add('inverted', () => '<bw-button :inverted="true">button</bw-button>')
    .add('disabled', () => '<bw-button :disabled="true">button</bw-button>')
    .add('disabled inverted', () => `
        <bw-button
            :disabled="true"
            :inverted="true"
        >button</bw-button>
    `)
    .add('large', () => `<bw-button :large="true">button</bw-button>`)
    .add('large inverted', () => `
        <bw-button
            :large="true"
            :inverted="true"
        >button</bw-button>
    `);
