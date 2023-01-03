import store from "@/store";
import { createNumericalQuestion, createYesNoQuestion } from "./functions";

const statinTreatmentQuestion = createYesNoQuestion({
  text: "Post index Statin treatment",
  isRequired: true,
});
export default {
  id: "post-index-page-48",
  title: "Post Index Data",
  questions: [
    createNumericalQuestion({
      text: "Post index Glycated hemoglobin (HbA1c %)",
      range: { min: 0, max: 100, step: 1 },
      unit: "HbA1c %",
    }),
    createNumericalQuestion({
      text: "Post index Alanine aminotransferase (ALT) (U/L)",
      range: { min: 0, max: 500, step: 1 },
      unit: "",
    }),
    createNumericalQuestion({
      text: "Post index Aspartate aminotransferase (AST) (U/L)",
      range: { min: 0, max: 500, step: 1 },
      unit: "",
    }),
    statinTreatmentQuestion,
  ],
  next() {
    const statinTreatment =
      store.getters["Records/selectedRecord"][statinTreatmentQuestion.id()];
    if (statinTreatment.trim().toLowerCase() == "no") {
      return "post-index-page-52";
    }
    return "post-index-page-49";
  },
};
