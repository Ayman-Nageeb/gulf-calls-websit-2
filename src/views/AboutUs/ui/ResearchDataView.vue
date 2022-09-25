<template>
  <div id="about-research-view">
    <v-container style="max-width: 1080px">
      <v-card
        outlined
        class="pa-4 my-4"
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      >
        <h1 style="color: #fe7504">
          Type :
          <br />
          <span class="grey--text"
            >Investigator-initiator clinical research</span
          >
        </h1>
      </v-card>
      <v-card
        outlined
        class="pa-4 my-4"
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      >
        <h1 style="color: #fe7504">
          Lead Investigator :
          <br />
          <span class="grey--text">Prof. Khalid Al-Rasadi</span>
        </h1>
      </v-card>
      <v-card
        outlined
        class="pa-4 my-4"
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      >
        <h1 style="color: #fe7504">
          Participating Countries :
          <br />
          <span class="grey--text">Oman, Kuwait, UAE, Bahrain, Qatar</span>
        </h1>
      </v-card>
      <Rational
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      />
      <Background
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      />
      <Objectives
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      />
      <Population
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      />
      <Design
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      />
      <EthicalConsideration
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
      />
    </v-container>
  </div>
</template>

<script>
import Rational from "./research-data/Rational.vue";
import Background from "./research-data/Background.vue";
import Objectives from "./research-data/Objectives.vue";
import Population from "./research-data/Population.vue";
import Design from "./research-data/Design.vue";
import EthicalConsideration from "./research-data/EthicalConsideration.vue";
export default { components: { Rational, Background, Objectives, Population, Design, EthicalConsideration } };
</script>

<style>
</style>