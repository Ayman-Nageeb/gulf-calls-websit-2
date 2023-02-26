import { createMultiSelectQuestion } from "./functions";

export default {
  id: "post-index-page-66",
  title: "Post Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "Post index Hypertension treatment type",
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
      hasCustom: true,
    }),
  ],
  next: "post-index-page-67",
};
