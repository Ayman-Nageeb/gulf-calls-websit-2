import { createNumericalQuestion } from "./functions";

export default {
  id: "mmol_l-pre-index-data",
  title: "Pre index data (mmol/l)",
  questions: [
    createNumericalQuestion({
      text: "pre_index Total Cholesterol (TC) (mmol/L)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(TC) (mmol/L)",
    }),
    createNumericalQuestion({
      text: "pre_index Low-Density Lipoprotein-C (LDL-C) (mmol/L)",
      range: { min: 1.8, max: 100, step: 0.1 },
      unit: "(LDL-C) (mmol/L)",
    }),
    createNumericalQuestion({
      text: "pre_index High-Density Lipoprotein (HDL)(mmol/L)",
      range: { min: 0, max: 100, step: 0.1 },
      unit: "(HDL)(mmol/L)",
    }),
    createNumericalQuestion({
      text: "pre_index Triglycide (TG) (mmol/L)",
      range: { min: 0, max: 4.6, step: 0.1 },
      unit: "(TG) (mmol/L)",
    }),
    createNumericalQuestion({
      text: "pre_index Lipoprotein a (Lpa) (nmol/L)",
      range: { min: 7, max: 500, step: 0.1 },
      unit: "(Lpa) (nmol/L)",
    }),
    createNumericalQuestion({
      text: "pre_index Creatinine (micro mol/L)",
      range: { min: 0, max: 1000, step: 0.1 },
      unit: "(micro mol/L)",
    }),
  ],
  next: "pre-index-page-5",
};
