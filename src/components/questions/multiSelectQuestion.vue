<template>
  <div>
    <v-card
      class="py-4 my-4"
      :style="{
        border: `${
          errors.length > 0 ||
          (value == addedValueForCustomField && customFieldErrors.length > 0)
            ? '2px solid red'
            : 'none'
        }`,
      }"
    >
      <v-card-title>
        <v-btn
          x-small
          class="mx-2"
          outlined
          icon
          color="error"
          v-if="question.isRequired"
        >
          <v-icon>mdi-star</v-icon>
        </v-btn>
        {{ question.text }}
        <span class="caption error--text mx-2" v-if="question.isRequired"
          >( Required )</span
        >
      </v-card-title>
      <v-card-text>
        <p>{{ question.placeholder }}</p>

        <v-card
          :dark="value.includes(q)"
          outlined
          class="ma-2 pa-4"
          v-for="(q, index) of question.validValues"
          :key="index"
          @click="
            if (value.includes(q)) value.splice(value.indexOf(q), 1);
            else value.push(q);
            updateValue();
          "
          :color="value.includes(q) ? `success` : ``"
          :class="{
            'white--text': value == q,
          }"
        >
          <span class="title">
            <v-checkbox
              v-model="value"
              :label="`${q}`"
              :value="q"
              multiple
              readonly
            ></v-checkbox>
          </span>
        </v-card>
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
        type: "select",
        isRequired: true,
        validValues: [],
        value: null,
        hasCustom: false,
        radioView: false,
      }),
    },
  },
  data: () => ({
    errors: [],
    validValues: [],
    selected: [],
    value: [],
    addedValueForCustomField: null,
    customValue: null,
    customFieldErrors: [],
  }),

  created() {
    this.validValues = this.question.validValues;

    this.value = this.questionValue || [];
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
      if (this.validate()) {
        this.$store.commit("Records/setAttribute", {
          id: this.question.id(),
          value: this.value,
        });
      }
    },
    validate() {
      this.errors = [];
      const val = this.value;
      if (!val || val.length < 1) {
        this.errors.push(["The Given Value is invalid"]);
        this.errors.push([`Please select a value`]);
        return false;
      }
      this.$emit("input", this.value);
      return true;
    },
    validateCustomField() {
      this.customFieldErrors = [];
      const val = this.customValue;
      if (!val || val.trim() == "") {
        this.customFieldErrors.push(["The Given Value is invalid"]);
        this.customFieldErrors.push([`Please Enter a value`]);
        return false;
      }
      this.$emit("input", this.customValue);
      return true;
    },
  },
  watch: {
    validateAll() {
      if (this.validateAll) {
        this.validate();
        this.validateCustomField();
      } else {
        this.errors = [];
        this.customFieldErrors = [];
      }
    },
  },
};
</script>
  
  <style>
</style>