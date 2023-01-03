import { createNumericalQuestion } from "./functions";

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
  ],
  next: "index-page-25-1",
};
