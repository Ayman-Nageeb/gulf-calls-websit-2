import store from "@/store";
import { createYesNoQuestion } from "./functions";

const anticoagulantTreatmentQuestion = createYesNoQuestion({
  text: "Post index Anticoagulant treatment",
  isRequired: true,
});
export default {
  id: "post-index-page-67",
  title: "Post Index Data",
  questions: [anticoagulantTreatmentQuestion],
  next() {
    const anticoagulantTreatment =
      store.getters["Records/selectedRecord"][anticoagulantTreatmentQuestion.id()];
    if (anticoagulantTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-69";
    }
    return "post-index-page-68";
  },
};
