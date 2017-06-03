<template>
  <div>
    <label for="name">{{name}}:</label>
    <input
      id="name"
      type="text"
      :value="value"
      class="form-control"
      @input="updateValue($event.target.value)">
  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: 'single-line-text',

    props: ['name', 'value'],

    methods: {
      updateValue(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
