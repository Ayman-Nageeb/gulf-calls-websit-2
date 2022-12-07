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
        <v-card>
          <v-card-title>
            <v-btn icon large color="secondary" @click="goBack">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            Set Basic Data
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
                <v-btn
                  color="secondary"
                  width="140px"
                  text
                  x-large
                  @click="pervious"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                  <span class="mx-2"></span>
                  <span>pervious</span>
                </v-btn>
                <v-spacer></v-spacer>
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
              </v-card-actions>
            </v-container>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>
  
  <script>
  import QuestionView from "@/components/QuestionView.vue";
  export default {
    components: { QuestionView },
    data() {
      return {
        showDialog: true,
        questions: [
          {
            id: "age",
            text: "Age",
            placeholder: "Enter Age here",
            type: "numeric",
            isRequired: true,
            range: { min: 46, max: 120, step: 1 },
            unit: "Years",
            value: null,
          },
  
          {
            id: "gender",
            text: "Gender",
            type: "categorical",
            placeholder: "Please select Gender",
            isRequired: true,
            validValues: ["Female", "Male"],
            value: null,
          },
          {
            id: "nationality",
            text: "Nationality",
            type: "select",
            placeholder: "Please select Nationality",
            isRequired: true,
            validValues: [
              "Omani",
              "Saudi",
              "Qatari",
              "Kuwaiti",
              "Emirati",
              "Bahraini",
              "Yemeni",
              "Pakistani",
              "Indian",
              "Bengali",
              "Srilanki",
              "Sudani",
              "Syrian",
              "Iraqi",
              "Egyption",
              "Palestine",
            ],
            value: null,
            hasCustom: true,
          },
          {
            id: "education",
            text: "Education",
            type: "categorical",
            placeholder: "Please select Education level",
            isRequired: true,
            validValues: [
              "Less than a high school diploma",
              "High school diploma",
              "Bachelor’s degree",
              "Master’s degree",
              "Doctoral degree",
            ],
            value: null,
          },
        ],
      };
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
      next() {},
      pervious() {},
      goBack() {
        window.history.back();
      },
    },
  };
  </script>
  
  <style>
  </style>