<template>
  <div class="intro">
    <v-container style="max-width: 1080px; min-height: calc(70vh - 250px)">
      <v-row class="mt-16">
        <v-col lg="5" md="6" sm="12" class="my-12">
          <h1 class="display-3 font-weight-black" style="color: #536dfe">
            Our Centers
          </h1>
          <p class="title text-justify mt-6">
            We'd Love To Hear From You. whether you are curious or want to get
            help, we are ready to answer any and all questions
          </p>
          <div class="my-6"></div>

          <div class="my-6"></div>

          <div class="text-center">
            <v-btn
              color="#536dfe"
              x-large
              depressed
              dark
              rounded
              @click="$vuetify.goTo('#national-centers-view', { offset: 50 })"
            >
              <span>Discover our centers</span>
            </v-btn>
          </div>
        </v-col>
        <v-col lg="7" md="6" sm="12">
          <div class="px-12">
            <v-img
              width="100%"
              contain
              :src="require('./../../../assets/best_place.svg')"
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