import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-58",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "Post index Omega 3 treatment type",
      validValues: [
        "Epanova (omega-3-carboxylic acids)",
        "Lovaza (omega-3-acid ethyl esters).",
        "Omtryg: (omega-3-acid ethyl esters)",
        "Vascepa (icosapent ethyl).",
      ],
    }),
    createCategoricalQuestion({
      text: "Post index Omega 3 treatment dose",
      validValues: ["1", "2", "3", "4"],
    }),
  ],
  next: "post-index-page-59",
};
