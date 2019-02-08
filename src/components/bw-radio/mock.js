import Vue from 'vue';

export default () =>
  new Vue({
    data: {
      value: 'first'
    },
    methods: {
      handleChange(value) {
        this.value = value;
      }
    },
  });
