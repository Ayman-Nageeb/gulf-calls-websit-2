import { createCategoricalQuestion } from "./functions";

export default {
  id: "pre-index-page-11",
  title: "Pre Index Data",
  questions: [
    createCategoricalQuestion({
      text: "pre_index Fibrate treatment dose",
      validValues: [
        "40",
        "43",
        "48",
        "50",
        "54",
        "67",
        "120",
        "130",
        "145",
        "150",
        "160",
        "200",
      ],
    }),
  ],
  next: "pre-index-page-14",
};
