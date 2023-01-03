import store from "@/store";
import { createYesNoQuestion } from "./functions";

const statinTreatmentQuestion = createYesNoQuestion({
  text: "index Statin treatment",
  isRequired: true,
});
export default {
  id: "index-page-25-1",
  title: "Index Data",
  questions: [statinTreatmentQuestion],
  next() {
    const statinTreatment =
      store.getters["Records/selectedRecord"][statinTreatmentQuestion.id()];
    if (statinTreatment.trim().toLowerCase() == "no") {
      return "index-page-29";
    }
    return "index-page-26";
  },
};
