<template>
  <div>
    <v-container style="max-width: 1080px">
      <h1 class="display-1 font-weight-bold text-center" style="color: #fe7504">
        <v-img
          :src="require('../../../../assets/literature-review.png')"
          height="100px"
          contain
        />
        literature Review
      </h1>
      <div class="my-12"></div>
      <CEPHEUSStudy />
      <div class="my-12"></div>
      <PracticePatterns />
    </v-container>
  </div>
</template>

<script>
import CEPHEUSStudy from "./CEPHEUS-study.vue";
import PracticePatterns from "./practice-patterns.vue";
export default {
  components: { CEPHEUSStudy, PracticePatterns },
  data: () => ({
    showMore: false,
  }),
};
</script>

<style>
</style>