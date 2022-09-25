<template>
  <div class="intro">
    <v-container style="max-width: 1080px; min-height: calc(100vh - 250px)">
      <v-row class="mt-16">
        <v-col lg="5" md="6" sm="12">
          <h1 class="display-3 font-weight-black" style="color: #536dfe">
            Contact us
          </h1>
          <p class="title text-justify mt-6">
            We'd Love To Hear From You. whether you are curious or want to get
            help, we are ready to answer any and all questions
          </p>
          <div class="my-6"></div>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-facebook</v-icon>
            </v-btn>
            <span class="mx-2"></span>
            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-twitter</v-icon>
            </v-btn>
            <span class="mx-2"></span>
            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-instagram</v-icon>
            </v-btn>
            <span class="mx-2"></span>
            <v-btn color="#536dfe" icon>
              <v-icon size="32">mdi-youtube</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
          <div class="my-6"></div>

          <div class="text-center">
            <v-btn
              color="#536dfe"
              x-large
              depressed
              dark
              rounded
              link
              href="mail:contact@gulf-calls.org"
            >
              <v-icon>mdi-email</v-icon>
              <span class="mx-2"></span>
              <span>contact@gulf-calls.org</span>
            </v-btn>
          </div>
        </v-col>
        <v-col lg="7" md="6" sm="12">
          <div class="mt-12 pt-12 px-12">
            <v-img
              width="100%"
              contain
              :src="require('./../../../assets/contact_us.svg')"
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