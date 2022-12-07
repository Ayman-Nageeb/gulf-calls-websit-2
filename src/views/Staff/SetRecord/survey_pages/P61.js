import { createCategoricalQuestion } from "./functions";

export default {
  id: "post-index-page-61",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "postindex PCSK9 (alirocumab) treatment dose",
      validValues: ["75", "150", "300"],
    }),
  ],
  next: "post-index-page-63",
};
