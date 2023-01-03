import store from "@/store";
import { createSelectQuestion, createYesNoQuestion } from "./functions";

const diabetesMellitesTreatmentQuestion = createYesNoQuestion({
  text: "index Diabetes mellites treatment",
  isRequired: true,
});

export default {
  id: "index-page-36",
  title: "Index Data",
  questions: [
    createSelectQuestion({
      text: "index Other lipid treatment",
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
      return "index-page-38";
    }

    return "index-page-37";
  },
};
