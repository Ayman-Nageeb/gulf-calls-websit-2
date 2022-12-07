import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-28",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Statin dose",
      validValues: ["1", "2", "3", "4"],
    }),
  ],
  next: "index-page-29",
};
