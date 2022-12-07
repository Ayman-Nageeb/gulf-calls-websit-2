import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-32",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Fibrate treatment dose",
      validValues: [
        "300",
        "600",
        "1200",
        "1600",
      ],
    }),
  ],
  next: "index-page-34",
};
