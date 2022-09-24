<template>
  <div class="main-footer">
    <v-row class="mt-1">
      <v-col>
        <v-card-actions>
          <v-btn
            class="mx-1"
            route
            :to="{ name: 'Login' }"
            large
            color="#fe7504"
            depressed
            outlined
            dark
          >
            <v-icon>mdi-lock-outline</v-icon>
            <span class="mx-1"></span>
            Staff login
            <span class="mx-1"></span>
          </v-btn>
          <v-spacer></v-spacer>
          <div>
            <v-btn
              class="mx-1"
              v-for="(button, index) of quickAccessButtons"
              :key="button.route.name + '_' + index"
              route
              :to="{ name: button.route.name }"
              large
              color="#1595b2"
              text
              >{{ button.name }}</v-btn
            >
          </div>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-row class="my-4">
      <v-col>
        <v-card-title>
          <v-avatar :tile="true">
            <v-img :src="require('../assets/logo.png')" contain />
          </v-avatar>
          <span class="mx-1"></span>
          <div class="title">
            <span class="font-weight-black mx-1">Gulf</span>
            <span class="font-weight-bold black--text ;">Calls</span>
          </div>
        </v-card-title>
      </v-col>
      <v-col>
        This study will help to identify a patient population that is
        potentially at high residual risk for future CV events, improve the
        quality of care for such patients and improve the adherence of
        physicians to implement lipid guidelines recommendations in their
        clinical practice.
      </v-col>
    </v-row>
    <div class="mt-8 py-2" style="border-top: 1px solid #cccc">
      <v-card-actions>
        <v-btn color="#777" icon>
          <v-icon size="32">mdi-facebook</v-icon>
        </v-btn>
        <span class="mx-2"></span>
        <v-btn color="#777" icon>
          <v-icon size="32">mdi-twitter</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        All rights reserved for Gulf CALL foundation
      </v-card-actions>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    quickAccessButtons() {
      const buttons = [
        { name: "National Centers", route: { name: "National.Centers" } },
        { name: "National Leaders", route: { name: "National.Leaders" } },
        { name: "Contact us", route: { name: "ContactUs" } },
        { name: "About us", route: { name: "AboutUs" } },
      ];
      return buttons;
    },
  },
};
</script>

<style>
.main-footer {
  border-top: 1px solid #aaa;
  padding: 5px 0px;
}
</style>