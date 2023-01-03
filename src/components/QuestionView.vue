<template>
  <div>
    <!-- <div v-if="question.type.trim().toLocaleLowerCase() == 'categorical'">
      <v-card flat>
        <v-card-text x-large>
          <v-text-field
            name="search"
            label="Filter"
            outlined
            v-model="search"
            append-icon="mdi-magnify"
          ></v-text-field>
        </v-card-text>
      </v-card>

      <v-card
        outlined
        class="ma-2 pa-4"
        v-for="(q, index) of question.values.filter(filteredValues)"
        :key="index"
        @click="selected = q"
        :color="selected == q ? `success` : ``"
        :class="{
          'white--text': selected == q,
        }"
      >
        <span class="title">
          {{ q }}
        </span>
      </v-card>
    </div> -->
    <div v-if="question.type.trim().toLocaleLowerCase() == 'text'">
      <text-question :question="question" />
    </div>

    <div v-if="question.type.trim().toLocaleLowerCase() == 'numeric'">
      <numeric :question="question" />
    </div>

    <div v-if="question.type.trim().toLocaleLowerCase() == 'categorical'">
      <categorical :question="question" />
    </div>

    <div v-if="question.type.trim().toLocaleLowerCase() == 'select'">
      <select-question :question="question" />
    </div>

    <div v-if="question.type.trim().toLocaleLowerCase() == 'multi-select'">
      <multi-select-question :question="question" />
    </div>
  </div>
</template>

<script>
import Categorical from "./questions/categorical.vue";
import numeric from "./questions/numeric.vue";
import textQuestion from "./questions/text.vue";
import SelectQuestion from "./questions/selectQuestion.vue";
import MultiSelectQuestion from './questions/multiSelectQuestion.vue';


export default {
  components: {
    numeric,
    Categorical,
    SelectQuestion,
    textQuestion,
    
    MultiSelectQuestion,
  },
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
    selected: "",
    search: "",
  }),
  methods: {
    filteredValues(item) {
      if (!this.search || this.search.trim == "") return true;
      return (
        item
          .trim()
          .toLocaleLowerCase()
          .search(this.search.trim().toLocaleLowerCase()) >= 0
      );
    },
  },
  watch: {
    question() {
      this.selected = "";
    },
  },
};
</script>

<style>
</style>