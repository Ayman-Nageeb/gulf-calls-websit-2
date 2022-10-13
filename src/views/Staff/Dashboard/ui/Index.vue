<template>
  <div>
    <Intro />
    <div class="my-6"></div>
    <records-list />
  </div>
</template>

<script>
import Intro from "./Intro.vue";
import RecordsList from './RecordsList.vue';
export default {
    created() {
        if (!this.$store.getters["User/isAuthenticated"]) {
            this.$router.push({ name: "Login" });
        }
    },
    components: { Intro, RecordsList }
};
</script>

<style>
</style>