<template>
  <div>
    <p class="headline font-weight-bold">
      {{ question.text }}
    </p>
    <div v-if="question.type.trim().toLocaleLowerCase() == 'categorical'">
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
    </div>
    <div v-if="question.type.trim().toLocaleLowerCase() == 'numeric'">
      <!-- <v-row class="mb-4" justify="space-between">
        <v-col class="text-left">
          <span class="text-h2 font-weight-light" v-text="selected"></span>
          <span class="subheading font-weight-light mr-1">{{
            question.unit
          }}</span>
        </v-col>
      </v-row> -->

      <v-text-field
        placeholder="Enter value here"
        x-large
        v-model="selected"
        :min="question.range.from"
        :max="question.range.to"
        :step="question.step ? question.step : 0.01"
        type="number"
        outlined
        :suffix="` ${question.unit}`"
      ></v-text-field>

      <!-- <v-slider
        v-model="selected"
        always-dirty
        :min="question.range.from"
        :max="question.range.to"
        :step="question.step ? question.step : 0.01"
        thumb-label
        :thumb-size="48"
      >
        <template v-slot:prepend>
          <v-btn icon @click="selected -= question.step ? question.step : 0.01">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <v-icon> </v-icon>
        </template>

        <template v-slot:append>
          <v-btn icon @click="selected += question.step ? question.step : 0.01">
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </template>
      </v-slider> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      required: true,
      type: Object,
      default: () => ({}),
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