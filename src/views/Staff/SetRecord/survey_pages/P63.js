import store from "@/store";
import { createSelectQuestion, createYesNoQuestion } from "./functions";

const diabetesMellitesTreatmentQuestion = createYesNoQuestion({
  text: "Post index Diabetes mellites treatment",
  isRequired: true,
});

export default {
  id: "post-index-page-63",
  title: "Post Index Data",
  questions: [
    createSelectQuestion({
      text: "Post index other lipid treatment",
      validValues: ["Yes", "No"],
      radioView: true,
      hasCustom: true,
    }),
    diabetesMellitesTreatmentQuestion,
  ],
  next() {
    const diabetesMellitesTreatment =
      store.getters["Records/selectedRecord"][
        diabetesMellitesTreatmentQuestion.id()
      ];

    if (diabetesMellitesTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-65";
    }

    return "post-index-page-64";
  },
};
