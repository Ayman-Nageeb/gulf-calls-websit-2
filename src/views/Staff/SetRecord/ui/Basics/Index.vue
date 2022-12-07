<template>
  <div>
    <component :is="pages[selectedPageIndex]" />
  </div>
</template>

<script>
import basicsPage1 from "./basicsPage1.vue";
export default {
  components: { basicsPage1 },
  data: () => ({
    selectedPageIndex: 0,
  }),
  computed: {
    pages() {
      return [basicsPage1];
    },
  },
};
</script>

<style>
</style>