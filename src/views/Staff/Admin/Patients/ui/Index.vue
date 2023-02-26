<template>
  <div>
    <confirm-delete
      :show="showDelete"
      @cancel="
        recodeToRemove = null;
        showDelete = false;
      "
      @confirm="removeRecord"
    />
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
      <v-card outlined class="pa-4">
        <v-card-title>
          {{ user.name }}
          <v-spacer></v-spacer>
          {{ user.email }}
        </v-card-title>
        <v-divider class="mty-3"></v-divider>
        <v-card-title>
          latest record code:
          <span style="color: #536dfe" class="ml-2">{{
            patients.length > 0 ? patients[0].code : "NA"
          }}</span>
          <v-spacer></v-spacer>
          {{ patients.length }} Records
        </v-card-title>
      </v-card>
    </v-container>

    <div class="my-6"></div>
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
            <template v-slot:[`item.age`]="{ item }">
              <span> {{ item.age }} Years </span>
            </template>
            <template v-slot:[`item.id`]="{ item }">
              <v-btn
                icon
                color="error"
                @click="
                  recodeToRemove = item;
                  showDelete = true;
                "
              >
                <v-icon>mdi-trash-can-outline</v-icon>
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
import ConfirmDelete from "@/components/ConfirmDelete.vue";
import validUsers from "@/views/Login/ui/centersUsers";

export default {
  components: { ConfirmDelete },
  created() {
    if (!this.$store.getters["User/isAuthenticated"]) {
      this.$router.push({ name: "Login" });
    }
    this.getPatients();
  },
  data: () => ({
    search: "",
    patients: [],
    loading: false,
    showDelete: false,
    recodeToRemove: null,
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
        { text: "Remove", value: "id", align: "right" },
      ];
      return headers;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("User/logout");
      this.$router.push({ name: "Home" });
      return;
    },
    calcAge(birthDate) {
      birthDate = new Date(birthDate);
      const today = new Date();
      const age =
        today.getFullYear() -
        birthDate.getFullYear() -
        (today.getMonth() < birthDate.getMonth() ||
          (today.getMonth() === birthDate.getMonth() &&
            today.getDate() < birthDate.getDate()));
      return age;
    },
    async getPatients() {
      this.loading = true;
      try {
        const response = await axios.get("/patients");
        const data = response.data.data.reverse();
        const patients = [];
        for (let d of data) {
          d.data = JSON.parse(d.data);
          d.data.age = this.calcAge(d.data.date_of_birth);
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
    getCreatorByEmail(email) {
      for (let user of validUsers) {
        if (email.trim().toLowerCase() == user.email.trim().toLowerCase()) {
          return user;
        }
      }
      return null;
    },
    async removeRecord() {
      this.showDelete = false;
      this.loading = true;
      const creator = this.getCreatorByEmail(this.recodeToRemove.creator);
      const centerCode =
        "" + creator.center.country_code + creator.center.number;

      try {
        await axios.delete(
          `/centers/${centerCode}/patients/${this.recodeToRemove.id}`
        );
        this.recodeToRemove = null;
      } catch (error) {
        alert(error);
      }
      this.loading = false;
      this.getPatients();
    },
  },
};
</script>

<style>
</style>