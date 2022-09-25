<template>
  <div class="intro">
    <v-container style="max-width: 1080px">
      <v-row class="mt-16">
        <v-col lg="5" md="6" sm="12">
          <h1 class="display-3 font-weight-black" style="color: #536dfe">
            About The Research
          </h1>
          <p class="title text-justify mt-6">
            The Gulf TriglyCeride And ResiduaL CardiovascuLar RiSk (Gulf CALLS
            Study) aims to assess the long-term association between the
            triglyceride levels and the achievements of non-HDL-C in patients
            with very high cardiovascular risk patients (DM or CVD) in the
            Arabian Gulf Countries.
          </p>
          <div class="my-6"></div>
          <div class="text-center">
            <v-btn
              color="#536dfe"
              x-large
              depressed
              dark
              rounded
              @click="$vuetify.goTo('#about-research-view', { offset: 50 })"
              >Read more</v-btn
            >
          </div>
        </v-col>
        <v-col lg="7" md="6" sm="12">
          <div class="mt-12 pt-12 px-12">
            <v-img
              width="100%"
              contain
              :src="require('./../../../assets/online_information.svg')"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>