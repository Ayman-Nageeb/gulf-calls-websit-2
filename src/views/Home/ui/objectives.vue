<template>
  <div>
    <v-container style="max-width: 1080px">
      <h1 class="display-1 font-weight-bold text-center" style="color: #fe7504">
        <v-img :src="require('../../../assets/Objectives.png')" height="100px" contain />
        Objectives
      </h1>
      <v-card
        outlined
        class="pa-6 title mt-8"
        v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
        style="color: #1595b2"
      >
        To estimate the long-term association between changes in TG levels and
        the achievements of non-HDL-C in patients with very high CV risk (DM or
        CVD), who are on statins alone or statins with other lipid lowering
        treatments (LLTs) and with controled LDL-C in the Arabian Gulf
        Countries. The non-HDL-C CV risk-based target goals will be according to
        the ESC/EAS 2011, 2019 and ESC 2021 guidelines.
      </v-card>
      <v-row>
        <v-col>
          <v-card
            outlined
            class="pa-6 title mt-8"
            v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
            height="200px"
          >
            To estimate the long-term association between TG levels and CV
            events (non-fatal MI, non-fatal stroke, cardiac catheterization,
            all-cause mortality).
          </v-card>
        </v-col>
        <v-col>
          <v-card
            outlined
            class="pa-6 title mt-8"
            v-animate-onscroll="{ down: 'animate__animated animate__zoomIn' }"
            height="200px"
          >
            To assess the physicians’ perception and clinical practice patterns
            on the management of patients with high TG levels and the use of
            non-HDL-C as CV risk-based target goals.
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