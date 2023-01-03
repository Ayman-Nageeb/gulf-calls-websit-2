import store from "@/store";
import { createYesNoQuestion } from "./functions";

const statinTreatmentQuestion = createYesNoQuestion({
  text: "Post index Statin treatment",
  isRequired: true,
});
export default {
  id: "post-index-page-48-1",
  title: "Post Index Data",
  questions: [statinTreatmentQuestion],
  next() {
    const statinTreatment =
      store.getters["Records/selectedRecord"][statinTreatmentQuestion.id()];
    if (statinTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-52";
    }
    return "post-index-page-49";
  },
};
