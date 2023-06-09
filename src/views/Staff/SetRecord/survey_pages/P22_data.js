import { createNumericalQuestion, createYesNoQuestion } from "./functions";

export default {
  id: "index-page-22-data",
  title: "Index Data",
  questions: [
    createNumericalQuestion({
      text: "index Weight (kg)",

      range: { min: 40, max: 300, step: 0.1 },
      unit: "Kg",
    }),
    createNumericalQuestion({
      text: "index Height (cm)",
      range: { min: 120, max: 300, step: 1 },
      unit: "Kg",
    }),
    createNumericalQuestion({
      text: "index Blood Pressure (BP)- Systolic  (mmHg)",
      range: { min: 50, max: 200, step: 1 },
      unit: "mmHg",
    }),
    createNumericalQuestion({
      text: "index Blood Pressure (BP) - Diastolic  (mmHg)",
      range: { min: 50, max: 200, step: 1 },
      unit: "mmHg",
    }),
    createNumericalQuestion({
      text: "index Heart Rate (HR) (bpm)",
      range: { min: 40, max: 200, step: 1 },
      unit: "bpm",
    }),
    createYesNoQuestion({ text: "index Hypertension" }),
    createYesNoQuestion({ text: "index Dyslipidemia/hyperlipidemia" }),
    createYesNoQuestion({ text: "index Smoking" }),
    createYesNoQuestion({ text: "index Ex-Smoker" }),
    createYesNoQuestion({ text: "index Heart Failure (HF)" }),
    createYesNoQuestion({ text: "index Chronic Kidney Disease (CKD)" }),
    createYesNoQuestion({
      text: "index Chronic Obstructive Pulmonary Disease (COPD)",
    }),
    createYesNoQuestion({ text: "index Cancer" }),
    createYesNoQuestion({
      text: "pre_index Myocardial Infarction (MI)",
    }),
    createYesNoQuestion({
      text: "pre_index Percutaneous Coronary Intervention (PCI)",
    }),
    createYesNoQuestion({
      text: "pre_index Coronary Artery Bypass Grafting (CABG)",
    }),
    createYesNoQuestion({
      text: "pre_index Ischemic Stroke (IS)",
    }),
    createYesNoQuestion({
      text: "pre_index Peripheral Artery Disease (PAD)",
    }),
    createYesNoQuestion({
      text: "pre_index Carotid Artery disease (CAD) or stent",
    }),
  ],
  next: "basic-data",
};
