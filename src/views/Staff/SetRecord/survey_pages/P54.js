import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-54",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "Post index Fibrate treatment dose",
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
  next: "post-index-page-57",
};
