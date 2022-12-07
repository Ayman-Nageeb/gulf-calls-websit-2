import { createCategoricalQuestion, createTextQuestion } from "./functions";

export default {
  id: "post-index-page-43",
  title: "Post Index Data",
  questions: [
    createCategoricalQuestion({
      text: "postindex Evnet type",
      validValues: [
        "Diabetes mellites",
        "Myocardial infarction",
        "Ischemic strock",
        "Peripheral artery disease",
        "Percutaneous Coronary Intervention",
        "Coronary artery bypass grafting",
      ],
    }),
    createTextQuestion({
      text: "postindex First Event date (day/month/year)",
      placeholder: "day/month/year",
    }),
  ],
  next: "post-index-page-44",
};
