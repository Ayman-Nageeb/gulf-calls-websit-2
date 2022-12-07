import { createNumericalQuestion } from "./functions";

export default {
  id: "mg_dl-post_index-data-page-47",
  title: "Post Index data (mg/dl)",
  questions: [
    createNumericalQuestion({
      text: "post_index Total Cholesterol (TC) (mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(mg/dl)",
    }),
    createNumericalQuestion({
      text: "post_index Low-Density Lipoprotein-C (LDL-C) (mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(mg/dl)",
    }),
    createNumericalQuestion({
      text: "post_index High-Density Lipoprotein (HDL)(mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(HDL)(mg/dl)",
    }),
    createNumericalQuestion({
      text: "post_index Triglycide (TG) (mg/dl)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(TG) (mg/dl)",
    }),
    createNumericalQuestion({
      text: "post_index Lipoprotein a (Lpa) (md/dl)",
      range: { min: 7, max: 500, step: 0.1 },
      unit: "(Lpa) (mg/dl)",
    }),
    createNumericalQuestion({
      text: "post_index Creatinine (mg/dl)",
      range: { min: 0, max: 300, step: 0.1 },
      unit: "(mg/dl)",
    }),
  ],
  next: "post-index-page-48",
};
