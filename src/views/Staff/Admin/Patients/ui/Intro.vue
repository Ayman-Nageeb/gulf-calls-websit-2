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
        latest record code:
        <span style="color: #536dfe" class="ml-2">OM10021</span>
        <v-spacer></v-spacer>
        21 Records
      </v-card-title>
      <v-divider class="my-3"></v-divider>
    </v-container>
  </div>
</template>
  
  <script>
export default {
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
  },
};
</script>
  
  <style>
</style>