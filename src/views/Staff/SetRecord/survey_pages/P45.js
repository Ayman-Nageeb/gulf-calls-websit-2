import { createNumericalQuestion, createYesNoQuestion } from "./functions";

export default {
  id: "post-index-page-45",
  title: "Post Index Data",
  questions: [
    createNumericalQuestion({
      text: "post_index Weight (kg)",

      range: { min: 40, max: 300, step: 0.1 },
      unit: "Kg",
    }),
    createNumericalQuestion({
      text: "post_index Height (cm)",
      range: { min: 120, max: 300, step: 1 },
      unit: "Kg",
    }),
    createNumericalQuestion({
      text: "post_index Blood Pressure (BP)- Systolic  (mmHg)",
      range: { min: 50, max: 200, step: 1 },
      unit: "mmHg",
    }),
    createNumericalQuestion({
      text: "post_index Blood Pressure (BP) - Diastolic  (mmHg)",
      range: { min: 50, max: 200, step: 1 },
      unit: "mmHg",
    }),
    createNumericalQuestion({
      text: "post_index Heart Rate (HR) (bpm)",
      range: { min: 40, max: 200, step: 1 },
      unit: "bpm",
    }),
    createYesNoQuestion({ text: "post_index Hypertension" }),
    createYesNoQuestion({ text: "post_index Smoking" }),
    createYesNoQuestion({ text: "post_index Ex-Smoker" }),
    createYesNoQuestion({ text: "post_index Heart Failure (HF)" }),
    createYesNoQuestion({ text: "post_index Chronic Kidney Disease (CKD)" }),
    createYesNoQuestion({
      text: "post_index Chronic Obstructive Pulmonary Disease (COPD)",
    }),
    createYesNoQuestion({ text: "post_index Cancer" }),
  ],
  next: "post-index-page-45-1",
};
