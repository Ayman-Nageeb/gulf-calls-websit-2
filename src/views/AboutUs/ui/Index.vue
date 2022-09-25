<template>
  <div>
    <Intro />
    <div class="py-16"></div>
    <research-data-view />
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import ResearchDataView from './ResearchDataView.vue';
export default {
  components: { Intro, ResearchDataView },
};
</script>

<style>
</style>