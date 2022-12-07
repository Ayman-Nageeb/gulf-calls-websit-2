import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-62",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "postindex PCSK9 (evalucmab) treatment dose",
      validValues: ["140", "420"],
    }),
  ],
  next: "post-index-page-63",
};
