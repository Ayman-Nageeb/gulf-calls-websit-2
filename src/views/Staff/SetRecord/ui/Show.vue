<template>
  <div>
    <v-container style="max-width: 1080px">
      <v-card-title>
        <v-btn
          class="mx-1"
          route
          :to="{
            name: 'Staff.Dashboard',
          }"
          large
          color="#fe7504"
          depressed
          outlined
          dark
        >
          <v-icon> mdi-view-dashboard </v-icon>
          <span class="mx-1"></span>
          Goto Dashboard
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card outlined class="pa-4">
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
          <span style="color: #536dfe" class="ml-2">{{
            $route.params.id
          }}</span>
        </v-card-title>
        <v-divider class="my-3"></v-divider>
        <v-card-title>
          Age: {{ patient.age }}
          <v-spacer></v-spacer>
          Gender: {{ patient.gender }}
        </v-card-title>
        <v-divider class="my-3"></v-divider>
        <v-card-title>
          Nationality: {{ patient.nationality }}
          <v-spacer></v-spacer>
          Education: {{ patient.education }}
        </v-card-title>
        <v-divider class="my-3"></v-divider>
        <v-card-title>
          <v-btn
            route
            :to="{
              name: 'Records.Basics.Set',
              params: { id: patient.code, pageId: 'basic-data' },
            }"
            dark
            depressed
            color="#fe7504"
            x-large
            >Set Basic Data</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            route
            :to="{
              name: 'Records.PreIndex.Set',
              params: { id: patient.code, pageId: 'pre-index-data' },
            }"
            dark
            depressed
            color="#fe7504"
            x-large
            >Set PreIndex Data</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            route
            :to="{
              name: 'Records.Index.Set',
              params: { id: patient.code, pageId: 'index-page-22' },
            }"
            dark
            depressed
            color="#fe7504"
            x-large
            >Set Index Data</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            route
            :to="{
              name: 'Records.PostIndex.Set',
              params: { id: patient.code, pageId: 'post-index-page-42' },
            }"
            dark
            depressed
            color="#fe7504"
            x-large
            >Set Post-Index Data</v-btn
          >
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
    center() {
      return this.user.center;
    },
    patient() {
      return this.$store.getters["Records/selectedRecord"];
    },
  },
};
</script>

<style>
</style>