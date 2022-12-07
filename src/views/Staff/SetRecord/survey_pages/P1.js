import {
  createCategoricalQuestion,
  createNumericalQuestion,
  createSelectQuestion,
} from "./functions";

export default {
  id: "basic-data",
  title: "Basic Data",
  questions: [
    createNumericalQuestion({
      text: "Age",
      range: { min: 46, max: 120, step: 1 },
      unit: "Years",
    }),
    createCategoricalQuestion({
      text: "Gender",
      validValues: ["Female", "Male"],
    }),
    createSelectQuestion({
      text: "Nationality",
      validValues: [
        "Omani",
        "Saudi",
        "Qatari",
        "Kuwaiti",
        "Emirati",
        "Bahraini",
        "Yemeni",
        "Pakistani",
        "Indian",
        "Bengali",
        "Srilanki",
        "Sudani",
        "Syrian",
        "Iraqi",
        "Egyption",
        "Palestine",
      ],
      hasCustom: true,
    }),
    createCategoricalQuestion({
      text: "Education",
      validValues: [
        "Less than a high school diploma",
        "High school diploma",
        "Bachelor’s degree",
        "Master’s degree",
        "Doctoral degree",
      ],
    }),
  ],
  next: "pre-index-data",
};