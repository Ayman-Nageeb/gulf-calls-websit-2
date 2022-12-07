import { createCategoricalQuestion } from "./functions";

export default {
  id: "pre-index-page-8",
  title: "Pre Index Data",
  questions: [
    createCategoricalQuestion({
      text: "pre_index Statin dose",
      validValues: ["4", "10", "20", "40", "60", "80"],
    }),
  ],
  next: "pre-index-page-9",
};
