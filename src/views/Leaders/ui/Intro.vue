<template>
  <div class="intro">
    <v-container style="max-width: 1080px">
      <v-row class="mt-16">
        <v-col lg="5" md="6" sm="12">
          <h1 class="display-3 font-weight-black" style="color: #536dfe">Our Leaders</h1>
          <p class="title text-justify mt-2">
            The steering committee members include the Principal Investigator
            (PI), National Leader (NL) and National Coordinators (NC) from each
            country. The committee will be responsible for the design and
            approval of the study protocol, and monitoring of the study in their
            respective countries, and final approval of the study results and
            manuscripts submitted for publications in peer-reviewed journals
          </p>
          <div class="my-6"></div>
          <div class="text-center">
            <v-btn
              color="#1595b2"
              x-large
              depressed
              dark
              rounded
              @click="$vuetify.goTo('#national-leaders-view', { offset: 50 })"
              >View National leaders</v-btn
            >
          </div>
        </v-col>
        <v-col lg="7" md="6" sm="12">
          <div class="mt-12 pt-12 px-12">
            <v-img
              width="100%"
              contain
              :src="require('./../../../assets/engineering_team.svg')"
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