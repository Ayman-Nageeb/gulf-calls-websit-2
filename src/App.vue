<template>
  <v-app>
    <v-app-bar
      :fixed="bg.toLowerCase() == 'transparent'"
      :app="bg.toLowerCase() !== 'transparent'"
      :color="bg"
      class="px-4 elevation-0"
      :style="
        bg.toLowerCase() == `transparent`
          ? ''
          : `border-bottom: 1px solid #d2d2d2 !important`
      "
      style="border-bottom: 1px solid #24415466; background-color: white"
    >
      <router-link :to="{ name: 'Home' }" style="text-decoration: none">
        <div class="d-flex align-center">
          <v-avatar :tile="true" route :to="{ name: 'Home' }">
            <v-img :src="require('./assets/logo.png')" contain />
          </v-avatar>
          <span class="mx-1"></span>
          <div class="title black--text">
            <span class="font-weight-black mx-1">Gulf</span>
            <span class="font-weight-bold black--text ;">Calls</span>
          </div>
        </div>
      </router-link>
      <v-spacer></v-spacer>
      <div>
        <v-btn
          class="mx-1"
          v-for="(button, index) of quickAccessButtons"
          :key="button.route.name + '_' + index"
          route
          :to="{ name: button.route.name }"
          large
          :color="bg.toLowerCase() == 'transparent' ? 'black' : '#1595b2'"
          text
          >{{ button.name }}</v-btn
        >
      </div>
    </v-app-bar>
    <v-main>
      <v-snackbar
        v-model="showSystemCustomAlert"
        color="error"
        top
        center
        multi-line
        class="mt-16"
      >
        <span class="title">
          {{ alertText }}
        </span>

        <template v-slot:action="{ attrs }">
          <v-btn
            dark
            icon
            v-bind="attrs"
            @click="showSystemCustomAlert = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
      <router-view />
    </v-main>
    <v-footer class="pa-0 ma-0">
      <v-container class="py-0 my-0">
        <Footer />
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data: () => ({
    bg: "transparent",
    showSystemCustomAlert: false,
    alertText: "",
  }),
  computed: {
    showAppBar() {
      return this.$store.getters["Supervisors/isAuthenticated"];
    },
    transparentPages() {
      return ["HOME"];
    },
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
  mounted() {
    this.changeColor();
    window.alert = this.customAlert;
    window.onscroll = () => {
      this.changeColor();
    };
    if (this.$store.getters["User/isAuthenticated"]) {
      const user = this.$store.getters["User/user"];
      axios.defaults.headers.common["authorization-token"] = user.token;
    } else {
      axios.defaults.headers.common["authorization-token"] = "unauthorized";
    }
  },
  methods: {
    changeColor() {
      if (
        this.$route.name &&
        !this.transparentPages.includes(this.$route.name.toUpperCase())
      ) {
        this.bg = "white";
        return;
      }
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        this.bg = "white";
      } else {
        this.bg = "transparent";
      }
    },
    customAlert(message) {
      this.alertText = message;
      this.showSystemCustomAlert = true;
    },
  },
  watch: {
    $route() {
      this.changeColor();
    },
  },
  components: { Footer },
};
</script>
