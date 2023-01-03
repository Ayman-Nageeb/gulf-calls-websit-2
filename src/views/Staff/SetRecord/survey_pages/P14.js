import store from "@/store";
import { createYesNoQuestion } from "./functions";

const omega3TreatmentQuestion = createYesNoQuestion({
  text: "pre_index Omega 3 treatment",
  isRequired: true,
});
export default {
  id: "pre-index-page-14",
  title: "Pre Index Data",
  questions: [omega3TreatmentQuestion],
  next() {
    const omega3Treatment =
      store.getters["Records/selectedRecord"][omega3TreatmentQuestion.id()];

    if (omega3Treatment.trim().toLowerCase() == "no") {
      return "pre-index-page-16";
    }

    return "pre-index-page-15";
  },
};
