import { createDateQuestion, createMultiSelectQuestion } from "./functions";

export default {
  id: "post-index-page-43",
  title: "Post Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "postindex Evnet type",
      validValues: [
        "All-cause mortality",
        "Myocardial infarction",
        "Ischemic strock",
        "Peripheral artery disease",
        "Percutaneous Coronary Intervention",
        "Coronary artery bypass grafting",
      ],
    }),
    createDateQuestion({
      text: "postindex First Event date (day/month/year)",
      placeholder: "day/month/year",
    }),
  ],
  next: "post-index-page-44",
};
