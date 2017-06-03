<template>
  <div style="margin-top: 30px;" class="panel panel-default">
    <div class="panel-heading">{{templateID}}</div>
    <div class="panel-body">
      <form @submit.prevent="onSubmit">
        <div class="form-group" v-for="field in fields">
          <single-line-text
            v-if="field.fieldType === 'singleLineText'"
            v-model="form[field.fieldID]"
            :name="field.fieldID">
          </single-line-text>

          <custom-textarea
            v-if="field.fieldType === 'textArea'"
            v-model="form[field.fieldID]"
            :name="field.fieldID">
          </custom-textarea>
        </div>

        <div class="control">
          <button class="btn btn-primary">Create</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  import TextArea from './TextArea';
  import SingleLineText from './SingleLineText';

  export default {
    name: 'custom-form',
    props: ['templateID', 'fields'],

    components: {
      'custom-textarea': TextArea,
      'single-line-text': SingleLineText
    },

    data() {
      let form = {};

      this.fields.forEach((field) => {
        const name = field.fieldID;

        form[name] = '';
      });

      return {
        form,
        data: [],
      }
    },

    methods: {
      onSubmit() {
        this.data.push(this.form);
      },
    },
  };
</script>
