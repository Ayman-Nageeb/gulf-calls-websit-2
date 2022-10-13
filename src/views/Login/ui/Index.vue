<template>
  <v-container
    class="d-flex justify-center align-center"
    style="min-height: calc(100vh - 50px)"
    fill-height
  >
    <v-row>
      <v-col>
        <v-card
          class="pa-8 pt-0 ma-2 mt-2 mx-auto radius-12"
          style="border-color: #536dfe"
          elevation=""
          max-width="520"
          outlined
          :loading="loading"
          @keydown.enter="login"
        >
          <v-card-title class="pb-0 pt-2">
            <v-spacer></v-spacer>
            <v-img
              max-width="150"
              class="mt-4"
              :src="require('../../../assets/logo.png')"
            ></v-img>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-title class="">
            <v-spacer></v-spacer>
            <span class="primary--text font-weight-black"> Login </span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-title class="pt-0 mb-4">
            <v-spacer></v-spacer>
            <span class="blue--text headline"
              >Login With Your Account Credentials</span
            >
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="pb-0">
            <v-text-field
              type="email"
              placeholder="Enter your user name"
              label="Email"
              prepend-inner-icon="mdi-account"
              outlined
              v-model="email"
              :error-messages="emailErrors"
            >
            </v-text-field>
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              label="password"
              prepend-inner-icon="mdi-lock"
              outlined
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
              v-model="password"
              :error-messages="passwordErrors"
            ></v-text-field>

            <v-alert
              :border="responseAlert.border"
              outlined
              prominent
              :type="responseAlert.type"
              v-if="responseAlert.show"
            >
              <ul>
                <li
                  v-for="(message, index) of responseAlert.messages"
                  :key="index"
                >
                  {{ message }}
                </li>
              </ul>
            </v-alert>
          </v-card-text>

          <v-card-actions class="mt-0 px-4">
            <v-btn
              block
              color="#536dfe"
              x-large
              dark
              @click="login"
              :loading="loading"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
<style scoped>
.radius-12 {
  border-radius: 20px !important;
}
</style>
  
  
<script>
export default {
  data: () => ({
    showPassword: false,
    email: "",
    password: "",
    emailErrors: [],
    passwordErrors: [],
    loading: false,
    responseAlert: {
      show: false,
      messages: [],
      type: "warning",
      border: "left",
    },
  }),
  created() {
    if (this.$store.getters["User/isAuthenticated"]) {
      this.$router.push({ name: "Staff.Dashboard" });
    }
  },
  computed: {
    validUsers() {
      const omanFirstCenterUser = {
        email: "first_center@oman.com",
        name: 'Oman first center user',
        password: "123456",
        center: {
          name: "First Center Oman",
          number: 1,
          country: "Oman",
          country_code: "ON",
          last_patient_number: 21,
        },
      };
      const qatarFirstCenterUser = {
        email: "first_center@qatar.com",
        name: 'Qatar first center user',
        password: "123456",
        center: {
          name: "First Center Qatar",
          number: 1,
          country: "Qatar",
          country_code: "QR",
          last_patient_number: 0,
        },
      };
      const validUsers = [omanFirstCenterUser, qatarFirstCenterUser];
      return validUsers;
    },
  },
  methods: {
    login() {
      //remove all errors
      this.emailErrors = [];
      this.passwordErrors = [];
      this.responseAlert = {
        show: false,
        messages: [],
        type: "warning",
        border: "left",
      };
      //set request data
      const email = this.email.trim().toLowerCase();
      const password = this.password;
      //hide response alert
      this.responseAlert.show = false;
      // try to login
      if (email == "") {
        this.emailErrors.push("Please Enter your email");
        return;
      }
      if (password.trim() == "") {
        this.passwordErrors.push("Please Enter your password");
        return;
      }

      for (let user of this.validUsers) {
        if (user.email.trim().toLocaleLowerCase() == email) {
          if (user.password == password) {
            this.$store.dispatch("User/login", { user: user, token: password });
            this.$router.push({ name: "Staff.Dashboard" });
            return;
          }
        }
      }

      this.responseAlert.show = true;
      this.responseAlert.type = "error";
      this.responseAlert.messages.push("Wrong user name or password");
    },
  },
};
</script>
  

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #536dfe;
}
</style>
    