import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-31",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Fibrate treatment dose",
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
  next: "index-page-34",
};
