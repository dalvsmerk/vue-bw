import * as BwComponents from './components';

const VueBw = Vue => {
    Object.values(BwComponents).forEach(BwComponent => {
        Vue.use(BwComponent);
    });
};

export default VueBw;
