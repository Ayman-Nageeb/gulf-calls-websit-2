<template>
  <div>
    <v-card
      class="py-4 my-4"
      :style="{ border: `${errors.length > 0 ? '2px solid red' : 'none'}` }"
    >
      <v-card-title>
        {{ question.text }}
      </v-card-title>
      <v-card-text>
        <v-text-field
          :placeholder="
            question.placeholder ? question.placeholder : 'Enter value here'
          "
          v-model="value"
          :min="question.range.min"
          :max="question.range.max"
          :step="question.range.step ? question.range.step : 0.01"
          type="number"
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
        type: "numeric",
        isRequired: true,
        range: { min: 0, max: 9999999999, step: 0.01 },
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
    this.value = 0 + Number(this.questionValue);
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
          value: Number(this.value),
        });
      }
    },
    validate() {
      this.errors = [];
      const val = this.value,
        min = this.question.range.min,
        max = this.question.range.max;
      if (!val || isNaN(val) || val < min || val > max) {
        this.errors.push(["The Given Value is invalid"]);
        this.errors.push([`Please put a value between ${min} and ${max}`]);
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