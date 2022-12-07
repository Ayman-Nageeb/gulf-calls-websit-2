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
        {{ question.text }}
      </v-card-title>
      <v-card-text>
        <p>{{ question.placeholder }}</p>
        <v-radio-group v-model="value" v-if="question.radioView">
          <v-card
            :dark="value == q"
            outlined
            class="ma-2 pa-4"
            v-for="(q, index) of question.validValues"
            :key="index"
            @click="
              value = q;
              updateValue();
            "
            :color="value == q ? `success` : ``"
            :class="{
              'white--text': value == q,
            }"
          >
            <span class="title">
              <v-radio :label="`${q}`" :value="q"></v-radio>
            </span>
          </v-card>
        </v-radio-group>
        <v-autocomplete
          v-else
          v-model="value"
          :items="question.validValues"
          outlined
          :placeholder="question.placeholder"
          @blur="validate"
          :hint="errors.join(', ')"
          :persistent-hint="errors.length > 0"
          :error="errors.length > 0"
          @change="updateValue"
        ></v-autocomplete>
        <div v-if="value == addedValueForCustomField">
          <p>Please Enter value</p>
          <v-text-field
            outlined
            @blur="validateCustomField"
            :hint="customFieldErrors.join(', ')"
            :persistent-hint="customFieldErrors.length > 0"
            :error="customFieldErrors.length > 0"
            v-model="customValue"
            @input="updateValue"
          ></v-text-field>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>
  
  <script>
import { addedValueForCustomField } from "@/views/Staff/SetRecord/ui/validateQuestion";

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
    value: null,
    addedValueForCustomField: null,
    customValue: null,
    customFieldErrors: [],
  }),

  created() {
    this.addedValueForCustomField = addedValueForCustomField;

    this.validValues = this.question.validValues;
    if (this.question.hasCustom) {
      this.validValues.push(this.addedValueForCustomField);
    }

    this.value = this.questionValue;

    if (
      this.value &&
      this.value.trim() != "" &&
      !this.question.validValues.includes(this.value)
    ) {
      this.value = this.addedValueForCustomField;
      this.customValue = this.questionValue;
    }
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
      if (this.value == addedValueForCustomField) {
        if (this.validateCustomField) {
          this.$store.commit("Records/setAttribute", {
            id: this.question.id(),
            value: this.customValue,
          });
        }
      } else if (this.validate()) {
        this.$store.commit("Records/setAttribute", {
          id: this.question.id(),
          value: this.value,
        });
      }
    },
    validate() {
      this.errors = [];
      const val = this.value;
      if (!val || val.trim() == "" || !this.validValues.includes(val)) {
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