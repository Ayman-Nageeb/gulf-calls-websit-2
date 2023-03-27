import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-35",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Omega 3 treatment type",
      validValues: [
        "Epanova (omega-3-carboxylic acids)",
        "Omacor (omega-3-acid ethyl esters).",
        "Omtryg: (omega-3-acid ethyl esters)",
        "Vascepa (icosapent ethyl).",
      ],
    }),
    createCategoricalQuestion({
      text: "index Omega 3 treatment dose",
      validValues: ["1", "2", "3", "4"],
    }),
  ],
  next: "index-page-36",
};
