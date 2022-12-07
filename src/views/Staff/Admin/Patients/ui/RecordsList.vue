<template>
  <div>
    <v-container style="max-width: 1080px">
      <v-card outlined>
        <v-card-title>
          All Records
          <v-spacer></v-spacer>
          <download-excel
            class="btn btn-default"
            :data="patients"
            :worksheet="`gulf-calls Records`"
            :name="`gulf-calls_patients.xls`"
          >
            <v-btn color="success" large text>
              <v-icon>mdi-download</v-icon>
              <span class="mx-1"></span>
              Download XLS
            </v-btn>
          </download-excel>
        </v-card-title>
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
            :loading="loading"
            :headers="recordsDataTableHeaders"
            :items="patients"
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
import axios from "axios";
export default {
  data: () => ({
    search: "",
    patients: [],
    loading: false,
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
        { text: "Education", value: "education", align: "right" },
      ];
      return headers;
    },
  },
  created() {
    this.getPatients();
  },
  methods: {
    async getPatients() {
      this.loading = true;
      try {
        const response = await axios.get("/patients");
        const data = response.data.data.reverse();
        const patients = [];
        for (let d of data) {
          d.data = JSON.parse(d.data);
          d = Object.assign(
            { id: d.id, created_at: d.created_at, updated_at: d.updated_at },
            d.data
          );
          patients.push(d);
        }
        console.log(patients);
        this.patients = patients;
      } catch (error) {
        alert(error);
      }
      this.loading = false;
    },
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