import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-56",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "Post index Fibrate treatment dose",
      validValues: [
        "200",
        "400",
        "600",
      ],
    }),
  ],
  next: "post-index-page-57",
};
