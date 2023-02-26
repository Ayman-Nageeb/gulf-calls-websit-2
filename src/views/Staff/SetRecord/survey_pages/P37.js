import { createMultiSelectQuestion } from "./functions";

export default {
  id: "index-page-37",
  title: "Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "index Diabetes mellites treatment type",
      validValues: [
        "Metformin",
        "Sulfonylureas",
        "Insulin",
        "DPP-4 inhibitors",
        "SGLT2 inhibitors",
      ],
      hasCustom: true,
    }),
  ],
  next: "index-page-38",
};
