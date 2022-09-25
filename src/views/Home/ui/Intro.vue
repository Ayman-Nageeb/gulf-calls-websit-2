<template>
  <div class="intro">
    <v-container style="height: auto; min-height: 100vh; position: relative">
      <v-row
        class="mt-16 pt-16"
      >
        <v-col lg="2" xl="3" md="0" sm="0">
          <div></div>
        </v-col>
        <v-col lg="8" xl="6" md="12" sm="12">
          <v-card class="rounded-lg pa-6" outlined color="#ffffffBB">
            <v-card-title class="display-2 font-weight-bold">
              <v-spacer></v-spacer>
              Gulf CALLS study
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-title class="display-1" style="color: #1595b2">
              <v-spacer></v-spacer>
              Oman, Kuwait, UAE, Bahrain, Qatar
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="mt-3 title text-justify">
              <div>
                The Gulf TriglyCeride And ResiduaL CardiovascuLar RiSk (Gulf
                CALLS Study) aims to assess the long-term association between
                the triglyceride levels and the achievements of non-HDL-C in
                patients with very high cardiovascular risk patients (DM or CVD)
                in the Arabian Gulf Countries.
              </div>
              <div class="mt-8 text-center">
                <v-btn
                  class="mx-1"
                  route
                  :to="{ name: 'Login' }"
                  x-large
                  color="#fe7504"
                  depressed
                  dark
                >
                  <v-icon>mdi-lock-outline</v-icon>
                  <span class="mx-1"></span>
                  Staff login
                </v-btn>
                <span class="mx-6"></span>
                <v-btn
                  class="mx-1"
                  route
                  :to="{ name: 'ContactUs' }"
                  x-large
                  color="#1595b2"
                  depressed
                  dark
                >
                  <v-icon>mdi-message-text-outline</v-icon>
                  <span class="mx-1"></span>
                  Contact us
                </v-btn>

                
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
};
</script>

<style scoped>
.intro {
  height: auto;
  min-height: 108vh;
  background-image: url("@/assets/hospital-stock.webp");
  background-size: cover;
  clip-path: polygon(0 0, 100% 0, 100% 94%, 50% 100%, 0 94%);
}
</style>