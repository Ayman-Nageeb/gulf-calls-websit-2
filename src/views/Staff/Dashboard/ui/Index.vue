<template>
  <div>
    <v-container style="max-width: 1080px">
      <v-card-title>
        <v-spacer></v-spacer>
        <v-btn color="error" x-large depressed @click="logout">
          <v-icon>mdi-logout</v-icon>
          <span class="mx"></span>
          Logout
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
    </v-container>
    <v-container style="max-width: 1080px">
      <v-card outlined class="pa-4">
        <v-card-title>
          {{ user.name }}
          <v-spacer></v-spacer>
          {{ user.email }}
        </v-card-title>
        <v-divider class="mty-3"></v-divider>
        <v-card-title>
          {{ center.name }}
          (
          <span class="mx-1"></span>
          <img
            :src="`https://countryflagsapi.com/png/${center.country}`"
            style="width: 40px; border: 1px solid #ccc"
          />
          <span class="mx-2"></span>
          <span class="headline">
            {{ center.country }}
          </span>
          <span class="mx-1"></span>
          )
          <v-spacer></v-spacer>
          {{ patients.length }} Records
        </v-card-title>
        <v-divider class="my-3"></v-divider>
        <v-card-title>
          <v-btn
            color="#fe7504"
            x-large
            dark
            depressed
            route
            :to="{ name: 'Records.Create' }"
          >
            <v-icon>mdi-plus</v-icon>
            <span class="mx"></span>
            Add New Record
          </v-btn>
          <v-spacer></v-spacer>
          latest record code:
          <span style="color: #536dfe" class="ml-2">{{
            patients.length > 0 ? patients[0].code : "NA"
          }}</span>
        </v-card-title>
      </v-card>
    </v-container>
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
              <v-btn route color="#536dfe" text @click="goSetRecordData(item)">
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
  beforeCreate() {
    if (!this.$store.getters["User/isAuthenticated"]) {
      this.$router.push({ name: "Login" });
    } else {
      const user = this.$store.getters["User/user"];
      if (user && user.isAdmin) {
        this.$router.push({ name: "Staff.Admin.Patients" });
      }
    }
  },
  created() {
    if (!this.$store.getters["User/isAuthenticated"]) {
      this.$router.push({ name: "Login" });
    } else {
      const user = this.$store.getters["User/user"];
      if (user && user.isAdmin) {
        this.$router.push({ name: "Staff.Admin.Patients" });
      } else {
        this.getPatients();
      }
    }
  },
  methods: {
    goSetRecordData(record) {
      this.$store.commit("Records/setRecord", record);
      this.$router.replace({
        name: "Records.Show",
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
    logout() {
      this.$store.dispatch("User/logout");
      this.$router.push({ name: "Home" });
      return;
    },
  },
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
    center() {
      return this.user.center || {};
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
  data: () => ({
    search: "",
    patients: [],
    loading: false,
  }),
};
</script>

<style>
</style>