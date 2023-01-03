import { createMultiSelectQuestion } from "./functions";

export default {
  id: "pre-index-page-19",
  title: "Pre Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "pre_index Hypertension treatment type",
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
  next: "pre-index-page-20",
};
