import store from "@/store";
import { createSelectQuestion } from "./functions";

const statinTreatmentTypeQuestion = createSelectQuestion({
  text: "Post index Statin treatment type",
  validValues: [
    "Atorvastatin",
    "Fluvastatin",
    "Lovastatin",
    "Pravastatin",
    "Rosuvastatin",
    "Simvastatin",
    "Pitavastatin",
  ],
  hasCustom: true,
  radioView: true,
  isRequired: true,
});
export default {
  id: "post-index-page-49",
  title: "Post Index Data",
  questions: [statinTreatmentTypeQuestion],
  next() {
    const statinTreatmentType =
      store.getters["Records/selectedRecord"][statinTreatmentTypeQuestion.id()];
    if (statinTreatmentType.trim().toLowerCase() == "pitavastatin") {
      return "post-index-page-51";
    }
    return "post-index-page-50";
  },
};
