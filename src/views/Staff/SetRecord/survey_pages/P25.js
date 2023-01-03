import store from "@/store";
import { createNumericalQuestion, createYesNoQuestion } from "./functions";

const statinTreatmentQuestion = createYesNoQuestion({
  text: "index Statin treatment",
  isRequired: true,
});
export default {
  id: "index-page-25",
  title: "Index Data",
  questions: [
    createNumericalQuestion({
      text: "index Glycated hemoglobin (HbA1c %)",
      range: { min: 0, max: 100, step: 1 },
      unit: "HbA1c %",
    }),
    createNumericalQuestion({
      text: "index Alanine aminotransferase (ALT) (U/L)",
      range: { min: 0, max: 500, step: 1 },
      unit: "",
    }),
    createNumericalQuestion({
      text: "index Aspartate aminotransferase (AST) (U/L)",
      range: { min: 0, max: 500, step: 1 },
      unit: "",
    }),
    statinTreatmentQuestion,
  ],
  next(){
    const statinTreatment =
      store.getters["Records/selectedRecord"][statinTreatmentQuestion.id()];
    if (statinTreatment.trim().toLowerCase() == "no") {
      return "index-page-29";
    }
    return 'index-page-26'
  },
};
