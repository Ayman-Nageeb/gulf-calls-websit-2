<template>
  <div>
    <v-container style="max-width: 1080px">
      <v-card outlined>
        <v-card-title>
          {{ center.name }} Records
          <v-spacer></v-spacer>
          <download-excel
            class="btn btn-default"
            :data="patients"
            :worksheet="`${center.name} Records`"
            :name="`${center.name}.xls`"
          >
            <v-btn color="success" large text>
              <v-icon>mdi-download</v-icon>
              <span class="mx-1"></span>
              Download XLS
            </v-btn>
          </download-excel>
          <!-- <download-excel
            class="btn btn-default"
            :data="patients"
            :worksheet="`${center.name} Records`"
            :name="`${center.name}.xls`"
            type="csv"
          >
            <v-btn color="success" large text>
              <v-icon>mdi-download</v-icon>
              <span class="mx-1"></span>
              Download CSV
            </v-btn>
          </download-excel> -->
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
                color="#536dfe"
                text
                @click="goSetRecordData(item)"
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
    goSetRecordData(record) {
      this.$store.commit("Records/setRecord", record);
      this.$router.replace({
        name: "Records.SetData",
        params: { id: record.code, pageId: "basic-data" },
      });
    },
    async getPatients() {
      this.loading = true;
      try {
        const centerCode = "" + this.center.country_code + this.center.number;
        const response = await axios.get(`/centers/${centerCode}/patients`);
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