import store from "@/store";
import { createYesNoQuestion } from "./functions";

const PCSK9TreatmentQuestion = createYesNoQuestion({
  text: "postindex PCSK9 treatment",
  isRequired: true,
});
export default {
  id: "post-index-page-59",
  title: "Post Index Data",
  questions: [PCSK9TreatmentQuestion],
  next() {
    const PCSK9Treatment =
      store.getters["Records/selectedRecord"][PCSK9TreatmentQuestion.id()];

    if (PCSK9Treatment.trim().toLowerCase() == "no") {
      return "post-index-page-63";
    }

    return "post-index-page-60";
  },
};
