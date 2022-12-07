import store from "@/store";
import { createYesNoQuestion } from "./functions";

const heypertensionTreatmentQuestion = createYesNoQuestion({
  text: "index Hypertension treatment",
});
export default {
  id: "index-page-38",
  title: "Index Data",
  questions: [heypertensionTreatmentQuestion],
  next() {
    const heypertensionTreatment =
      store.getters["Records/selectedRecord"][heypertensionTreatmentQuestion.id()];
    if (heypertensionTreatment.trim().toLowerCase() == "no") {
      return "index-page-40";
    }
    return "index-page-39";
  },
};
