import { createCategoricalQuestion } from "./functions";

export default {
  id: "index-page-39",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Hypertension treatment type",
      validValues: [
        "α-Blocker",
        "β-Blocker",
        "Ca-Channel Blocker",
        "Diuretics",
        "ARB",
        "ACE",
        "Aldosterone antagonist",
        "Nitrate",
        "Hypertension combination",
      ],
    }),
  ],
  next: "index-page-40",
};
