import { createNumericalQuestion } from "./functions";

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
  ],
  next: "post-index-page-48-1",
};
