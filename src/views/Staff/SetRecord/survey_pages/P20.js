import store from "@/store";
import { createYesNoQuestion } from "./functions";

const anticoagulantTreatmentQuestion = createYesNoQuestion({
  text: "pre_index Anticoagulant treatment",
});
export default {
  id: "pre-index-page-20",
  title: "Pre Index Data",
  questions: [anticoagulantTreatmentQuestion],
  next() {
    const anticoagulantTreatment =
      store.getters["Records/selectedRecord"][anticoagulantTreatmentQuestion.id()];
    if (anticoagulantTreatment.trim().toLowerCase() == "no") {
      return "index-page-22";
    }
    return "pre-index-page-21";
  },
};
