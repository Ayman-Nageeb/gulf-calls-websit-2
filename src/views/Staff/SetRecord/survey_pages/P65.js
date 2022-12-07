import store from "@/store";
import { createYesNoQuestion } from "./functions";

const heypertensionTreatmentQuestion = createYesNoQuestion({
  text: "Post index Hypertension treatment",
});
export default {
  id: "post-index-page-65",
  title: "Index Data",
  questions: [heypertensionTreatmentQuestion],
  next() {
    const heypertensionTreatment =
      store.getters["Records/selectedRecord"][heypertensionTreatmentQuestion.id()];
    if (heypertensionTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-67";
    }
    return "post-index-page-66";
  },
};
