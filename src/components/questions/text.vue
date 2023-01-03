<template>
    <div>
      <v-card
        class="py-4 my-4"
        :style="{ border: `${errors.length > 0 ? '2px solid red' : 'none'}` }"
      >
        <v-card-title>
          <v-btn x-small class="mx-2" outlined icon color="error" v-if="question.isRequired">
          <v-icon>mdi-star</v-icon>
        </v-btn>
          {{ question.text }}
        <span class="caption error--text mx-2" v-if="question.isRequired">( Required )</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            :placeholder="
              question.placeholder ? question.placeholder : 'Enter value here'
            "
            v-model="value"
            type="text"
            outlined
            :suffix="` ${question.unit}`"
            @blur="validate"
            :hint="errors.join(', ')"
            :persistent-hint="errors.length > 0"
            :error="errors.length > 0"
            @input="updateValue"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </div>
  </template>
    
  <script>
  export default {
    props: {
      question: {
        required: true,
        type: Object,
        default: () => ({
          text: "",
          placeholder: "Enter value here",
          type: "text",
          isRequired: true,
          unit: "Unit",
          value: null,
        }),
      },
    },
    data: () => ({
      errors: [],
      value: null,
    }),
    created() {
      this.value = this.questionValue || '';
    },
    computed: {
      record() {
        return this.$store.getters["Records/selectedRecord"];
      },
      questionValue() {
        return this.$store.getters["Records/selectedRecord"][this.question.id()];
      },
      validateAll() {
        return this.$store.getters["Records/validateAll"];
      },
    },
    methods: {
      updateValue() {
        if(this.validate()){
  
          this.$store.commit("Records/setAttribute", {
            id: this.question.id(),
            value: this.value,
          });
        }
      },
      validate() {
        this.errors = [];
        const val = this.value;
        if (!val || val.trim() == '') {
          this.errors.push(["The Given Value is invalid"]);
          this.errors.push([`Please fill this field`]);
          return false;
        }
        this.$emit("input", this.value);
        return true;
      },
    },
    watch: {
      validateAll() {
        if (this.validateAll) {
          this.validate();
        } else {
          this.errors = [];
        }
      },
    },
  };
  </script>
    
    <style>
  </style>