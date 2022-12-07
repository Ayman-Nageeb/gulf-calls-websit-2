import { createNumericalQuestion } from "./functions";

export default {
  id: "post-index-page-69",
  title: "Post Index Data",
  questions: [
    createNumericalQuestion({
      text: "postindex Event number",
      range: { min: 0, max: 250, step: 1 },
    }),
  ],
  next: "",
};
