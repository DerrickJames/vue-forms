<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <div class="btn-group">
          <span v-for="form in forms">
            <button
              class="btn btn-info"
              style="margin-right: 10px"
              @click="toggle(form)">
                {{form.templateID}}
            </button>
          </span>
        </div>
      </div>
    </div>
    <div v-for="form in forms" class="row">
      <div class="col-md-6 col-md-offset-3">
        <custom-form
          :templateID="form.templateID"
          :fields="form.fields"
          v-if="activeForms.includes(form.templateID)">
        </custom-form>
      </div>

    </div>
  </div>
</template>

<script>
  /* eslint-disable */
  // import Form from '../core/Form';
  import Form from './Form';

  const forms = [{
    "templateID": "friend",
    "fields": [
      {
        "fieldID": "name",
        "label": "friend name",
        "fieldType": "singleLineText"
      },
      {
        "fieldID": "favColor",
        "label": "favorite color",
        "fieldType": "singleLineText"
      }
    ]
  },
  {
    "templateID": "task",
    "fields": [
      {
        "fieldID": "taskTitle",
        "label": "title",
        "fieldType": "singleLineText"
      },
      {
        "fieldID": "taskNotes",
        "label": "task notes",
        "fieldType": "textArea"
      }
    ]
  }];


  export default {
    name: 'hello',
    components: {
      'custom-form': Form,
    },

    data() {
      return {
        forms,
        activeForms: [],
      };
    },

    methods: {
     toggle(form) {
        this.activeForms.push(form.templateID);
     },
    },
  };
</script>
