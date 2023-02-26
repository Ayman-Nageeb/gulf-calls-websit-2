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
          Add New Record
          <span style="color: #536dfe" class="ml-2 font-weight-bold"
            >OM10022</span
          >
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            color="error"
            @click="$router.replace({ name: 'Staff.Dashboard' })"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-5">
          <v-container style="max-width: 1080px">
            <p class="title mb-6">Patient Basic Data</p>
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

              <span class="mx-2"></span>
              <v-btn
                color="success"
                width="200px"
                depressed
                x-large
                @click="next"
              >
                <span>Next</span>
                <span class="mx-2"></span>
                <v-icon>mdi-arrow-right</v-icon>
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
import { validateQuestions } from "../../SetRecord/ui/validateQuestion";
import P1 from "../../SetRecord/survey_pages/P1";
export default {
  components: { QuestionView },
  data() {
    return {
      showDialog: true,
      loading: false,
    };
  },
  created() {
    this.$store.commit("Records/reSetSelectedRecord");
    this.$store.commit("Records/invalidateAll");

    this.questions = P1.questions;
  },
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
    center() {
      return this.user.center;
    },
  },
  methods: {
    async next() {
      this.$store.commit("Records/invalidateAll");

      if (!validateQuestions(this.questions)) {
        this.$store.commit("Records/validateAll");
        return;
      }
      this.loading = true;

      try {
        const data = this.$store.getters["Records/selectedRecord"];
        data.creator = this.$store.getters["User/user"].email;

        const centerCode = "" + this.center.country_code + this.center.number;
        let response = await axios.post(`/centers/${centerCode}/patients`, {
          data: JSON.stringify(data),
        });
        console.log();
        let patient = response.data.data;

        response = await axios.post(
          `/centers/${centerCode}/patients/${patient.id}/`,
          {
            data: JSON.stringify(data),
          },
          {
            params: {
              _method: "PUT",
            },
          }
        );

        patient = response.data.data;
        patient = Object.assign(
          {
            id: patient.id,
            created_at: patient.created_at,
            updated_at: patient.updated_at,
          },
          JSON.parse(patient.data)
        );

        this.$store.commit("Records/setRecord", patient);
        this.$router.replace({
          name: "Records.Show",
          params: { id: patient.code },
        });
      } catch (error) {
        
        alert(error.response.data.message);
      }
      this.loading = false;
    },
    pervious() {},
    goBack() {
      window.history.back();
    },
  },
};
</script>

<style>
</style>