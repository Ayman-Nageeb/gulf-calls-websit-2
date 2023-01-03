import store from "@/store";
import { createYesNoQuestion } from "./functions";

const fibrateTreatmentQuestion = createYesNoQuestion({
  text: "Post index Fibrate treatment",
  isRequired: true,
});
export default {
  id: "post-index-page-52",
  title: "Post Index Data",
  questions: [
    createYesNoQuestion({
      text: "Post index Ezetimibe",
    }),
    fibrateTreatmentQuestion,
  ],
  next() {
    const fibrateTreatment =
      store.getters["Records/selectedRecord"][fibrateTreatmentQuestion.id()];

    if (fibrateTreatment.trim().toLowerCase() == "yes") {
      return "post-index-page-53";
    }

    if (fibrateTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-57";
    }
    
    return "basic-data";
  },
};
