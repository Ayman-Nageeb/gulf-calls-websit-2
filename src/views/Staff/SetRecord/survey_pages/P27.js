import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-27",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Statin dose",
      validValues: ["4", "10", "20", "40", "60", "80"],
    }),
  ],
  next: "index-page-29",
};
