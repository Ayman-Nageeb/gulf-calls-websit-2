import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-51",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "Post index Statin dose",
      validValues: ["1", "2", "3", "4"],
    }),
  ],
  next: "post-index-page-52",
};
