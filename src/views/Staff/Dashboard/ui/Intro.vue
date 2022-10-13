<template>
  <div>
    <v-container style="max-width: 1080px">
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
        21 Records
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
        <span style="color: #536dfe" class="ml-2">OM10021</span>
      </v-card-title>
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
  },
};
</script>
  
  <style>
</style>