import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-55",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "Post index Fibrate treatment dose",
      validValues: [
        "300",
        "600",
        "1200",
        "1600",
      ],
    }),
  ],
  next: "post-index-page-57",
};
