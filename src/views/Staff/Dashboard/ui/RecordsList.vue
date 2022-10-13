<template>
  <div>
    <v-container style="max-width: 1080px">
      <v-card outlined>
        <v-card-title> {{ center.name }} Records </v-card-title>
        <v-card-text>
          <v-text-field
            name="records-search-bar"
            label="Filter records"
            id="records-search-bar"
            append-icon="mdi-magnify mdi-rotate-90"
            outlined
            v-model="search"
          ></v-text-field>
          <v-data-table
            :headers="recordsDataTableHeaders"
            :items="dataTableItems"
            class="elevation-0"
            :search="search"
          >
            <template v-slot:[`item.code`]="{ item }">
              <v-btn
                route
                :to="{
                  name: 'Records.Show',
                  params: { id: item.code },
                }"
                color="#536dfe"
                text
              >
                {{ item.code }}
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    search: "",
  }),
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
    center() {
      return this.user.center;
    },
    recordsDataTableHeaders() {
      const headers = [
        { text: "Code", value: "code" },
        { text: "Age", value: "age" },
        { text: "Gender", value: "gender" },
        { text: "Nationality", value: "nationality" },
        { text: "Education", value: "education" },
      ];
      return headers;
    },
    dataTableItems() {
      const items = [];
      const code = "OM1";
      const validGenders = ["Male", "Female"];
      const validNationalities = [
        "Sudani",
        "Omani",
        "Saudi",
        "Qatari",
        "Kuwaiti",
        "Iraqi",
      ];
      const validEducation = [
        "Less than a high school diploma",
        "High school diploma",
        "Higher diploma",
        "Bachelor’s degree",
        "Master’s degree",
        "Doctoral degree",
      ];
      for (let i = 1; i <= this.center.last_patient_number; i++) {
        items.push({
          code: code + i.toString().padStart(4, "0"),
          age: this.randomNumber(15, 70),
          gender: this.getRandomItem(validGenders),
          nationality: this.getRandomItem(validNationalities),
          education: this.getRandomItem(validEducation),
        });
      }
      return items.reverse();
    },
  },
  methods: {
    randomNumber(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomItem(arr) {
      // get random index value
      const randomIndex = this.randomNumber(0, arr.length - 1);

      // get random item
      const item = arr[randomIndex];

      return item;
    },
  },
};
</script>

<style>
</style>