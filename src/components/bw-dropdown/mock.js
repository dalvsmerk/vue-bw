import Vue from 'vue';

export default () => new Vue({
    data() {
        return {
            value: '',
            list: [
                {
                    key: 'First',
                    value: 'first',
                },
                {
                    key: 'Second',
                    value: 'second',
                },
                {
                    key: 'Third',
                    value: 'third',
                },
            ]
        };
    },
});
