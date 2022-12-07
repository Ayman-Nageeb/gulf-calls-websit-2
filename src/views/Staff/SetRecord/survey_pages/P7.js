import { createCategoricalQuestion } from "./functions";

export default {
  id: "pre-index-page-7",
  title: "Pre Index Data",
  questions: [
    createCategoricalQuestion({
      text: "pre_index Statin dose",
      validValues: ["1", "2", "3", "4"],
    }),
  ],
  next: "pre-index-page-9",
};
