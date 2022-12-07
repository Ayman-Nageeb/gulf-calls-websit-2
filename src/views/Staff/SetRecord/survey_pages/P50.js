import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-50",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "Post index Statin dose",
      validValues: ["4", "10", "20", "40", "60", "80"],
    }),
  ],
  next: "post-index-page-52",
};
