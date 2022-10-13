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
          Set Pre-Index Data
          <span style="color: #536dfe" class="ml-2 font-weight-bold"
            >OM10022</span
          >
          <v-spacer></v-spacer>
          <v-btn
            icon
            large
            color="error"
            @click="
              $router.replace({
                name: 'Records.Show',
                params: { id: 'OM10022' },
              })
            "
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text class="pt-5">
          <v-container style="max-width: 1080px">
            <p class="title mb-6">Patient Pre-Index Data</p>
            <div class="my-3"></div>
            <QuestionView :question="questions[selectedQuestionIndex]" />
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
  data: () => ({
    showDialog: true,
    selectedQuestionIndex: 0,
  }),
  computed: {
    user() {
      return this.$store.getters["User/user"];
    },
    center() {
      return this.user.center;
    },
    questions() {
      return [
        {
          text: "pre_index weight (kg)",
          type: "numeric",
          range: { from: 40, to: 300 },
          unit: "kg",
        },
        {
          text: "pre_index height (cm)",
          type: "numeric",
          range: { from: 120, to: 300 },
          unit: "Cm",
        },
        {
          text: "pre_index BP - Systolic (mmHg) ",
          type: "numeric",
          range: { from: 50, to: 200 },
          unit: "mmHg",
        },
        {
          text: "pre_index BP - Diastolic (mmHg)",
          type: "numeric",
          range: { from: 50, to: 200 },
          unit: "mmHg",
        },
        {
          text: "pre_index HR (bpm)",
          type: "numeric",
          range: { from: 40, to: 200 },
          unit: "bpm",
        },
        {
          text: "pre_index DM",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index HPT",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index Family history of CAD",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index dyslipidemia/hyperlipidemia",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index ex-smoker",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index curenet smoker",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index MI",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index PCI",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index CABG",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index IS",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index PAD",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index HF",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index CKD",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index COPD",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index Cancer",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index TC (mmol/L)",
          type: "numeric",
          range: { from: 0, to: 30 },
          unit: "mmol/L",
        },
        {
          text: "pre_index LDL-C (mmol/L) ",
          type: "numeric",
          range: { from: 0, to: 30 },
          unit: "mmol/L",
        },
        {
          text: "pre_index HDL-C (mmol/L)",
          type: "numeric",
          range: { from: 0, to: 10 },
          unit: "mmol/L",
        },
        {
          text: "pre_index TG (mmol/L)",
          type: "numeric",
          range: { from: 0, to: 30 },
          unit: "mmol/L",
        },
        {
          text: "pre_index Lpa (nmol/L)",
          type: "numeric",
          range: { from: 7, to: 500 },
          unit: "nmol/L",
        },
        {
          text: "pre_index HbA1c (%)",
          type: "numeric",
          range: { from: 3, to: 20 },
          unit: "%",
        },
        {
          text: "pre_index Creatinine (micro mol/L) ",
          type: "numeric",
          range: { from: 20, to: 300 },
          unit: "micro mol/L",
        },
        {
          text: "pre_index ALT (U/L)",
          type: "numeric",
          range: { from: 20, to: 500 },
          unit: "U/L",
        },
        {
          text: "pre_index AST (U/L)",
          type: "numeric",
          range: { from: 20, to: 500 },
          unit: "U/L",
        },
        {
          text: "pre_index statin Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index statin Rx type",
          type: "categorical",
          values: [
            "Atorvastatin ",
            "Fluvastatin",
            "Lovastatin",
            "Pravastatin",
            "Rosuvastatin",
            "Simvastatin",
            "Pitavastatin",
          ],
        },
        {
          text: "pre_index statin dose",
          type: "categorical",
          values: [
            "5,10, 20, 40, 60, 80 ",
            "5,10, 20, 40, 60, 80",
            "5,10, 20, 40, 60, 80",
            "5,10, 20, 40, 60, 80",
            "5,10, 20, 40, 60, 80",
            "5,10, 20, 40, 60, 80",
            "1, 2, 3, 4",
          ],
        },
        {
          text: "pre_index ezetimibe",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index fibrate Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index fibrate Rx type",
          type: "categorical",
          values: ["Fenofibrate ", "Gemfibrozil", "Bizafibrate"],
        },
        {
          text: "pre_index fibrate Rx dose",
          type: "categorical",
          values: [
            "40, 43, 48, 50, 54, 67, 120, 130, 145, 150, 160, 200 ",
            "300, 600, 1200, 1600",
            "200, 400, 600",
          ],
        },
        {
          text: "pre_index omega 3 Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index omega 3 Rx type",
          type: "categorical",
          values: [
            "Epanova (omega-3-carboxylic acids) ",
            "Lovaza (omega-3-acid ethyl esters).",
            "Bizafibrate",
            "Vascepa (icosapent ethyl).",
          ],
        },
        {
          text: "pre_index omega 3 Rx dose",
          type: "categorical",
          values: ["1, 2, 3, 4", "1, 2, 3, 4", "1, 2, 3, 4", "1, 2, 3, 4"],
        },
        {
          text: "pre_index other lipid Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index DM Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index DM Rx Type",
          type: "categorical",
          values: [
            "Metformin",
            "Sulfonylureas",
            "Insulin",
            "DPP-4 inhibitors",
            "SGLT2 inhibitors",
          ],
        },
        {
          text: "pre_index DM Rx no.",
          type: "numeric",
          range: { from: 1, to: 10 },
          step: 1,
          unit: "",
        },
        {
          text: "pre_index HPT Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index HPT Rx Type",
          type: "categorical",
          values: [
            "α-Blocker",
            "β-Blocker",
            "Ca-Channel Blocker",
            "Diuretics",
            "ARB ",
            "ACE  ",
            "Aldosterone antagonist ",
            "Nitrate ",
            "Hypertension combination ",
          ],
        },
        {
          text: "pre_index HPT Rx no.",
          type: "numeric",
          range: { from: 1, to: 10 },
          step: 1,
          unit: "",
        },

        {
          text: "pre_index anticoagulant Rx",
          type: "categorical",
          values: ["Yes", "No"],
        },
        {
          text: "pre_index anticoagulant Rx Type",
          type: "categorical",
          values: [
            "Aspirin",
            "Clopidogrel",
            "Glycoprotein IIb/IIIa inhibitors",
            "Warfarin",
            "Other anticoagulants",
          ],
        },
        {
          text: "pre_index anticoagulant Rx no. ",
          type: "numeric",
          range: { from: 1, to: 10 },
          step: 1,
          unit: "",
        },
      ];
    },
  },
  methods: {
    next() {
      if (this.selectedQuestionIndex < this.questions.length - 1) {
        ++this.selectedQuestionIndex;
      } else {
        this.$router.push({ name: "Records.Show", params: { id: "OM10022" } });
      }
    },
    pervious() {
      if (this.selectedQuestionIndex > 0) {
        --this.selectedQuestionIndex;
      }
    },
    goBack() {
      window.history.back();
    },
  },
  components: { QuestionView },
};
</script>

<style>
</style>