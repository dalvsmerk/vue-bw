import Vue from 'vue';
import { configure } from '@storybook/vue';
import BwButton from '../src/components/bw-button';
import BwInput from '../src/components/bw-input';

Vue.component('bw-button', BwButton);
Vue.component('bw-input', BwInput);

function loadStories() {
    require('../stories/bw-button');
    require('../stories/bw-input');
}

configure(loadStories, module);
