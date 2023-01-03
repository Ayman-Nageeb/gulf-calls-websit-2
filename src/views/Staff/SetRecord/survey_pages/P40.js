import store from "@/store";
import { createYesNoQuestion } from "./functions";

const anticoagulantTreatmentQuestion = createYesNoQuestion({
  text: "index Anticoagulant treatment",
  isRequired: true,
});
export default {
  id: "index-page-40",
  title: "Index Data",
  questions: [anticoagulantTreatmentQuestion],
  next() {
    const anticoagulantTreatment =
      store.getters["Records/selectedRecord"][anticoagulantTreatmentQuestion.id()];
    if (anticoagulantTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-42";
    }
    return "index-page-41";
  },
};
