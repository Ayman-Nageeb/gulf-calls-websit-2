import store from "@/store";
import { createYesNoQuestion } from "./functions";

const anticoagulantTreatmentQuestion = createYesNoQuestion({
  text: "postindex Event",
});
export default {
  id: "post-index-page-42",
  title: "Post Index Data",
  questions: [anticoagulantTreatmentQuestion],
  next() {
    const anticoagulantTreatment =
      store.getters["Records/selectedRecord"][
        anticoagulantTreatmentQuestion.id()
      ];
    if (anticoagulantTreatment.trim().toLowerCase() == "yes") {
      return "post-index-page-43";
    }
    if (anticoagulantTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-45";
    }
    return "basic-data";
  },
};
