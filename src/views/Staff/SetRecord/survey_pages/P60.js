import store from "@/store";
import { createCategoricalQuestion } from "./functions";

const PCSK9TreatmentTypeQuestion = createCategoricalQuestion({
  text: "postindex PCSK9 treatment type",
  validValues: ["Alirocumab", "Evolocumab"],
});
export default {
  id: "post-index-page-60",
  title: "Post Index Data",
  questions: [PCSK9TreatmentTypeQuestion],
  next() {
    const PCSK9TreatmentType =
      store.getters["Records/selectedRecord"][PCSK9TreatmentTypeQuestion.id()];

    if (PCSK9TreatmentType.trim().toLowerCase() == "alirocumab") {
      return "post-index-page-61";
    }

    if (PCSK9TreatmentType.trim().toLowerCase() == "evolocumab") {
      return "post-index-page-62";
    }

    return "basic-data";
  },
};
