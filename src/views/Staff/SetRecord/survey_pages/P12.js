import { createCategoricalQuestion } from "./functions";

export default {
  id: "pre-index-page-12",
  title: "Pre Index Data",
  questions: [
    createCategoricalQuestion({
      text: "pre_index Fibrate treatment dose",
      validValues: [
        "300",
        "600",
        "1200",
        "1600",
      ],
    }),
  ],
  next: "pre-index-page-14",
};
