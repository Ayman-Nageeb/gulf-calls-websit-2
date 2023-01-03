<template>
  <div>
    <v-dialog
      v-model="showDialog"
      scrollable
      fullscreen
      persistent
      :overlay="false"
      transition="dialog-transition"
    >
      <v-card :loading="loading" :disabled="loading" loader-height="15">
        <v-card-title>
          <v-btn icon large color="secondary" @click="goBack">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          Set Record Data [<span
            style="color: #536dfe"
            class="ml-2 mx-1 font-weight-bold"
          >
            {{ $route.params.id }} </span
          >]
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            color="error"
            @click="
              $router.replace({
                name: 'Records.Show',
                params: { id: $route.params.id },
              })
            "
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-5">
          <v-container style="max-width: 1080px">
            <p class="title mb-6">
              {{ selectedPage.title }} ({{ questions.length }} Questions)
            </p>
            <div class="my-3"></div>
            <div v-for="(q, i) of questions" :key="i">
              <question-view :question="q" />
            </div>
          </v-container>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-container style="max-width: 1080px">
            <v-card-actions class="pa-0 ma-0">
              <v-spacer></v-spacer>
              <v-btn
                color="secondary"
                width="180px"
                text
                x-large
                @click="pervious"
                outlined
                v-if="hasPrevious"
              >
                <v-icon>mdi-arrow-left</v-icon>
                <span class="mx-2"></span>
                <span>pervious</span>
              </v-btn>
              <span class="mx-2"></span>
              <v-btn
                color="success"
                width="200px"
                depressed
                x-large
                @click="next"
                v-if="hasNext"
              >
                <span>Next</span>
                <span class="mx-2"></span>
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
              <v-btn
                v-else
                color="success"
                width="200px"
                depressed
                x-large
                @click="next"
              >
                <v-icon>mdi-floppy</v-icon>
                <span class="mx-2"></span>
                <span>Save and exit</span>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
  
  <script>
import QuestionView from "@/components/QuestionView.vue";
import axios from "axios";
import {
  postIndexClinicalPages as pages,
  DEFAULT_PAGE_ID,
} from "../survey_pages/index";

import { validateQuestions } from "../../SetRecord/ui/validateQuestion";
export default {
  components: { QuestionView },
  data() {
    return {
      showDialog: true,
      loading: false,
      selectedPage: {},
    };
  },
  created() {
    this.$store.commit("Records/invalidateAll");
    this.selectedPage = this.getPageFromUrl();
  },
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
    center() {
      return this.user.center;
    },
    questions() {
      return this.selectedPage.questions;
    },
    hasPrevious() {
      return this.selectedPage !== pages[0];
    },
    hasNext() {
      return this.selectedPage !== pages[pages.length - 1];
    },
  },
  methods: {
    getPageFromUrl() {
      let id = this.$route.params.pageId;
      if (!id) id = DEFAULT_PAGE_ID;
      for (let page of pages) {
        if (page.id.toLowerCase() == id.toLowerCase()) return page;
      }
      return pages[0];
    },
    async next() {
      this.$store.commit("Records/invalidateAll");

      if (!validateQuestions(this.questions)) {
        this.$store.commit("Records/validateAll");
        return;
      }
      this.loading = true;

      try {
        const data = this.$store.getters["Records/selectedRecord"];
        const centerCode = "" + this.center.country_code + this.center.number;
        const patientId = data.id;
        const response = await axios.post(
          `/centers/${centerCode}/patients/${patientId}/`,
          {
            data: JSON.stringify(data),
          },
          {
            params: {
              _method: "PUT",
            },
          }
        );
        console.log();
        let patient = response.data.data;
        patient = Object.assign(
          {
            id: patient.id,
            created_at: patient.created_at,
            updated_at: patient.updated_at,
          },
          JSON.parse(patient.data)
        );
        this.$store.commit("Records/setRecord", patient);

        if (!this.hasNext) {
          await this.$router.push({
            name: "Records.Show",
            params: { id: this.$route.params.id },
          });
          this.$forceUpdate();
          return;
        }

        //get next question id
        let nextId = this.selectedPage.next;
        if (nextId instanceof Function) nextId = this.selectedPage.next();

        this.$router.push({
          name: "Records.PostIndex.Set",
          params: { id: patient.code, pageId: nextId },
        });
      } catch (error) {
        alert(error);
      }
      this.loading = false;
    },
    pervious() {
      window.history.back();
    },
    goBack() {
      window.history.back();
    },
  },
  watch: {
    "$route.params.pageId": {
      handler: function () {
        this.selectedPage = this.getPageFromUrl();
        window.location.reload();
      },
      deep: true,
    },
  },
};
</script>
  
  <style>
</style>