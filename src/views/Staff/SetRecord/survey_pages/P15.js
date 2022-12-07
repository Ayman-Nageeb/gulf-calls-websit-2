import { createCategoricalQuestion } from "./functions";

export default {
  id: "pre-index-page-15",
  title: "Pre Index Data",
  questions: [
    createCategoricalQuestion({
      text: "pre_index Omega 3 treatment type",
      validValues: [
        "Epanova (omega-3-carboxylic acids)",
        "Lovaza (omega-3-acid ethyl esters).",
        "Omtryg: (omega-3-acid ethyl esters)",
        "Vascepa (icosapent ethyl).",
      ],
    }),
    createCategoricalQuestion({
      text: "pre_index Omega 3 treatment dose",
      validValues: ["1", "2", "3", "4"],
    }),
  ],
  next: "pre-index-page-16",
};
