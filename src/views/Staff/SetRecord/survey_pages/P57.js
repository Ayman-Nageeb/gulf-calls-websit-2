import store from "@/store";
import { createYesNoQuestion } from "./functions";

const omega3TreatmentQuestion = createYesNoQuestion({
  text: "Post index Omega 3 treatment",
});
export default {
  id: "post-index-page-57",
  title: "Post Index Data",
  questions: [omega3TreatmentQuestion],
  next() {
    const omega3Treatment =
      store.getters["Records/selectedRecord"][omega3TreatmentQuestion.id()];

    if (omega3Treatment.trim().toLowerCase() == "no") {
      return "post-index-page-59";
    }

    return "post-index-page-58";
  },
};
