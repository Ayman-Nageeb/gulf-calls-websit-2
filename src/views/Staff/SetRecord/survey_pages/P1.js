import {
  createCategoricalQuestion,
  createDateQuestion,
  createSelectQuestion,
  createTextQuestion,
} from "./functions";

export default {
  id: "basic-data",
  title: "Basic Data",
  questions: [
    createTextQuestion({
      text: "Code",
    }),
    createDateQuestion({
      text: "Date of Birth",
      // range: { min: 46, max: 120, step: 1 },
      placeholder: "dd/mm/yyyy",

      isRequired: true,
    }),
    createCategoricalQuestion({
      text: "Gender",
      validValues: ["Female", "Male"],
      isRequired: true,
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
      isRequired: true,
    }),
    createCategoricalQuestion({
      isRequired: true,
      text: "Education",
      validValues: [
        "Less than a high school diploma",
        "High school diploma",
        "Bachelor’s degree",
        "Master’s degree",
        "Doctoral degree",
        "Non of the above",
      ],
    }),
  ],
  next: "pre-index-data",
};
