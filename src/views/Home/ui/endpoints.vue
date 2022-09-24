<template>
  <div>
    <v-container style="max-width: 1080px">
      <h1 class="display-1 font-weight-bold text-center" style="color: #fe7504">
        <v-img
          :src="require('../../../assets/Endpoints.png')"
          height="100px"
          contain
        />
        Endpoints
      </h1>
      <v-row>
        <v-col>
          <v-card
            outlined
            class="pa-6 title mt-8"
            v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
            style="color: #1595b2"
            height="150px"
          >
            Proportion of patients with achieved CV risk-based target goals.
          </v-card>
        </v-col>
        <v-col>
          <v-card
            outlined
            class="pa-6 title mt-8"
            v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
            height="150px"
          >
            Proportion of patients with high TG levels and CV events.
          </v-card>
        </v-col>
        <v-col>
          <v-card
            outlined
            class="pa-6 title mt-8"
            v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
            height="150px"
          >
            Proportion of responded questions by the physicians.
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>