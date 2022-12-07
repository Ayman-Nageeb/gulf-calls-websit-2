import store from "@/store";
import { createYesNoQuestion } from "./functions";

const heypertensionTreatmentQuestion = createYesNoQuestion({
  text: "pre_index Hypertension treatment",
});
export default {
  id: "pre-index-page-18",
  title: "Pre Index Data",
  questions: [heypertensionTreatmentQuestion],
  next() {
    const heypertensionTreatment =
      store.getters["Records/selectedRecord"][heypertensionTreatmentQuestion.id()];
    if (heypertensionTreatment.trim().toLowerCase() == "no") {
      return "pre-index-page-20";
    }
    return "pre-index-page-19";
  },
};
