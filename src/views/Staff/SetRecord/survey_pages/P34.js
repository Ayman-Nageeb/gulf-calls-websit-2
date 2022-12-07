import store from "@/store";
import { createYesNoQuestion } from "./functions";

const omega3TreatmentQuestion = createYesNoQuestion({
  text: "index Omega 3 treatment",
});
export default {
  id: "index-page-34",
  title: "Index Data",
  questions: [omega3TreatmentQuestion],
  next() {
    const omega3Treatment =
      store.getters["Records/selectedRecord"][omega3TreatmentQuestion.id()];

    if (omega3Treatment.trim().toLowerCase() == "no") {
      return "index-page-36";
    }

    return "index-page-35";
  },
};
