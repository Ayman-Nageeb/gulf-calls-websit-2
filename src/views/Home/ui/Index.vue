<template>
  <div>
    <Intro />
    <div class="my-8"></div>
    <Summary />
    <div class="my-8"></div>
    <literature-review />
    <div class="my-8"></div>
    <objectives />
    <div class="my-8"></div>
    <Endpoints />
    <div class="my-8"></div>
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import LiteratureReview from './literature-review/literature-review.vue';
import Summary from "./summary.vue";
import Objectives from "./objectives.vue";
import Endpoints from "./endpoints.vue";
export default {
    components: { Intro, Summary, LiteratureReview, Objectives, Endpoints }
}
</script>

<style>

</style>