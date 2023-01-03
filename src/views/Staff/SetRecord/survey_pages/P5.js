import store from "@/store";
import { createNumericalQuestion, createYesNoQuestion } from "./functions";

const statinTreatmentQuestion = createYesNoQuestion({
  text: "pre_index Statin treatment",
  isRequired: true,
});
export default {
  id: "pre-index-page-5",
  title: "Pre Index Data",
  questions: [
    createNumericalQuestion({
      text: "pre_index Glycated hemoglobin (HbA1c %)",
      range: { min: 0, max: 100, step: 1 },
      unit: "HbA1c %",
    }),
    createNumericalQuestion({
      text: "pre_index Alanine aminotransferase (ALT) (U/L)",
      range: { min: 0, max: 500, step: 1 },
      unit: "",
    }),
    createNumericalQuestion({
      text: "pre_index Aspartate aminotransferase (AST) (U/L)",
      range: { min: 0, max: 500, step: 1 },
      unit: "",
    }),
    statinTreatmentQuestion,
  ],
  next(){
    const statinTreatment =
      store.getters["Records/selectedRecord"][statinTreatmentQuestion.id()];
    if (statinTreatment.trim().toLowerCase() == "no") {
      return "pre-index-page-9";
    }
    return 'pre-index-page-6'
  },
};
