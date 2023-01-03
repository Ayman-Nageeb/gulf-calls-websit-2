import store from "@/store";
import { createYesNoQuestion } from "./functions";

const fibrateTreatmentQuestion = createYesNoQuestion({
  text: "index Fibrate treatment",
  isRequired: true,
});
export default {
  id: "index-page-29",
  title: "Index Data",
  questions: [
    createYesNoQuestion({
      text: "index Ezetimibe",
    }),
    fibrateTreatmentQuestion,
  ],
  next() {
    const fibrateTreatment =
      store.getters["Records/selectedRecord"][fibrateTreatmentQuestion.id()];

    if (fibrateTreatment.trim().toLowerCase() == "yes") {
      return "index-page-30";
    }

    if (fibrateTreatment.trim().toLowerCase() == "no") {
      return "index-page-34";
    }
    
    return "basic-data";
  },
};
