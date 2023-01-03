import store from "@/store";
import {
  createCategoricalQuestion,
} from "./functions";

const statinTreatmentTypeQuestion = createCategoricalQuestion({
  text: "index Statin treatment type",
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
  id: "index-page-26",
  title: "Index Data",
  questions: [statinTreatmentTypeQuestion],
  next() {
    const statinTreatmentType =
      store.getters["Records/selectedRecord"][statinTreatmentTypeQuestion.id()];
    if (statinTreatmentType.trim().toLowerCase() == "pitavastatin") {
      return "index-page-28";
    }
    return "index-page-27";
  },
};
