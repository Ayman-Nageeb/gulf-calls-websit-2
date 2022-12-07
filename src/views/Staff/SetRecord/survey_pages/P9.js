import store from "@/store";
import { createYesNoQuestion } from "./functions";

const fibrateTreatmentQuestion = createYesNoQuestion({
  text: "pre_index Fibrate treatment",
});
export default {
  id: "pre-index-page-9",
  title: "Pre Index Data",
  questions: [
    createYesNoQuestion({
      text: "pre_index Ezetimibe",
    }),
    fibrateTreatmentQuestion,
  ],
  next() {
    const fibrateTreatment =
      store.getters["Records/selectedRecord"][fibrateTreatmentQuestion.id()];

    if (fibrateTreatment.trim().toLowerCase() == "yes") {
      return "pre-index-page-10";
    }

    if (fibrateTreatment.trim().toLowerCase() == "no") {
      return "pre-index-page-14";
    }
    
    return "basic-data";
  },
};
