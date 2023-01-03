import { createMultiSelectQuestion } from "./functions";

export default {
  id: "pre-index-page-17",
  title: "Pre Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "pre_index Diabetes mellites treatment type",
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
  next: "pre-index-page-18",
};
