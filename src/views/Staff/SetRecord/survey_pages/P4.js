import { createNumericalQuestion } from "./functions";

export default {
  id: "mg_dl-pre-index-data",
  title: "Pre index data (mg/dl)",
  questions: [
    createNumericalQuestion({
      text: "pre_index Total Cholesterol (TC) (mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(mg/dl)",
    }),
    createNumericalQuestion({
      text: "pre_index Low-Density Lipoprotein-C (LDL-C) (mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(mg/dl)",
    }),
    createNumericalQuestion({
      text: "pre_index High-Density Lipoprotein (HDL)(mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(HDL)(mg/dl)",
    }),
    createNumericalQuestion({
      text: "pre_index Triglycide (TG) (mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(TG) (mg/dl)",
    }),
    createNumericalQuestion({
      text: "pre_index Lipoprotein a (Lpa) (md/dl)",
      range: { min: 7, max: 500, step: 0.1 },
      unit: "(Lpa) (mg/dl)",
    }),
    createNumericalQuestion({
      text: "pre_index Creatinine (mg/dl)",
      range: { min: 0, max: 300, step: 0.1 },
      unit: "(mg/dl)",
    }),
  ],
  next: "pre-index-page-5",
};
