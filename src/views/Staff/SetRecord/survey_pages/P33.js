import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-33",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Fibrate treatment dose",
      validValues: [
        "200",
        "400",
        "600",
      ],
    }),
  ],
  next: "index-page-34",
};
