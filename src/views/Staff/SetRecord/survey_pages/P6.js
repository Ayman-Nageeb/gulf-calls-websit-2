import store from "@/store";
import {
  createCategoricalQuestion,
} from "./functions";

const statinTreatmentTypeQuestion = createCategoricalQuestion({
  text: "pre_index Statin treatment type",
  validValues: [
    "Atorvastatin",
    "Fluvastatin",
    "Lovastatin",
    "Pravastatin",
    "Rosuvastatin",
    "Simvastatin",
    "Pitavastatin",
  ],
  isRequired: true,
});
export default {
  id: "pre-index-page-6",
  title: "Pre Index Data",
  questions: [statinTreatmentTypeQuestion],
  next() {
    const statinTreatmentType =
      store.getters["Records/selectedRecord"][statinTreatmentTypeQuestion.id()];
    if (statinTreatmentType.trim().toLowerCase() == "pitavastatin") {
      return "pre-index-page-7";
    }
    return "pre-index-page-8";
  },
};
