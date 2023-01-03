import store from "@/store";
import {
  createCategoricalQuestion,
  createNumericalQuestion,
  createYesNoQuestion,
} from "./functions";

const measuringQuestion = createCategoricalQuestion({
  text: "pre_index Unit used for measuring",
  validValues: ["mmol/l", "mg/dl"],
  isRequired: true,
});

export default {
  id: "pre-index-data",
  title: "Pre Index Data",
  questions: [
    createNumericalQuestion({
      text: "pre_index Weight (kg)",

      range: { min: 40, max: 300, step: 0.1 },
      unit: "Kg",
    }),
    createNumericalQuestion({
      text: "pre_index Height (cm)",
      range: { min: 1, max: 500, step: 1 },
      unit: "Kg",
    }),
    createNumericalQuestion({
      text: "pre_index Blood Pressure (BP)- Systolic  (mmHg)",
      range: { min: 50, max: 200, step: 1 },
      unit: "mmHg",
    }),
    createNumericalQuestion({
      text: "pre_index Blood Pressure (BP) - Diastolic  (mmHg)",
      range: { min: 50, max: 200, step: 1 },
      unit: "mmHg",
    }),
    createNumericalQuestion({
      text: "pre_index Heart Rate (HR) (bpm)",
      range: { min: 40, max: 200, step: 1 },
      unit: "bpm",
    }),
    createYesNoQuestion({
      text: "pre_index Diabetes Mellitus (DM)",
    }),
    createYesNoQuestion({
      text: "pre_index Hypertension (HRT)",
    }),
    createYesNoQuestion({
      text: "pre_index Family history of coronary artery disease",
    }),
    createYesNoQuestion({
      text: "pre_index Dyslipidemia/Hyperlipidemia",
    }),
    createYesNoQuestion({
      text: "pre_index Ex-smoker",
    }),
    createYesNoQuestion({
      text: "pre_index Curenet smoker",
    }),
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
      text: "pre_index Heart Failure (HF)",
    }),
    createYesNoQuestion({
      text: "pre_index Chronic Kidney Disease (CKD)",
    }),
    createYesNoQuestion({
      text: "pre_index Chronic Obstructive Pulmonary Disease (COPD)",
    }),
    createYesNoQuestion({
      text: "pre_index Cancer",
    }),
    measuringQuestion,
  ],
  next() {
    const measuringUnit =
      store.getters["Records/selectedRecord"][measuringQuestion.id()];
    if (measuringUnit == "mmol/l") {
      return "mmol_l-pre-index-data";
    }
    if (measuringUnit == "mg/dl") {
      return "mg_dl-pre-index-data";
    }
    return "basic-data";
  },
};
