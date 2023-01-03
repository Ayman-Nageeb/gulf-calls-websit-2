import store from "@/store";
import { createSelectQuestion, createYesNoQuestion } from "./functions";

const diabetesMellitesTreatmentQuestion = createYesNoQuestion({
  text: "pre_index Diabetes mellites treatment",
  isRequired: true,
});

export default {
  id: "pre-index-page-16",
  title: "Pre Index Data",
  questions: [
    createSelectQuestion({
      text: "pre_index Other lipid treatment",
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
      return "pre-index-page-18";
    }

    return "pre-index-page-17";
  },
};
