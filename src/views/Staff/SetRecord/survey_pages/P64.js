import { createSelectQuestion } from "./functions";

export default {
  id: "post-index-page-64",
  title: "Post Index Data",
  questions: [
    createSelectQuestion({
      text: "Post index Diabetes mellites treatment type",
      validValues: [
        "Metformin",
        "Sulfonylureas",
        "Insulin",
        "DPP-4 inhibitors",
        "SGLT2 inhibitors",
      ],
      hasCustom: true,
      radioView: true,
    }),
  ],
  next: "post-index-page-65",
};
