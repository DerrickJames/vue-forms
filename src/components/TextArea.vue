<template>
  <div>
    <label for="name">{{name}}:</label>
    <textarea
      id="name"
      type="text"
      :value="value"
      class="form-control"
      @input="updateValue($event.target.value)">
    </textarea>
  </div>
</template>

<script>
  /* eslint-disable */

  export default {
    name: 'custom-textarea',

    props: ['name', 'value'],

    methods: {
      updateValue(value) {
        this.$emit('input', value);
      }
    }
  };
</script>
