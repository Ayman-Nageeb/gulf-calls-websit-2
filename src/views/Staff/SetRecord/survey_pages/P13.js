import { createCategoricalQuestion } from "./functions";

export default {
  id: "pre-index-page-13",
  title: "Pre Index Data",
  questions: [
    createCategoricalQuestion({
      text: "pre_index Fibrate treatment dose",
      validValues: [
        "200",
        "400",
        "600",
      ],
    }),
  ],
  next: "pre-index-page-14",
};
