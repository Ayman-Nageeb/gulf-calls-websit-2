import { createMultiSelectQuestion } from "./functions";

export default {
  id: "post-index-page-68",
  title: "Post Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "Post index Anticoagulant treatment type",
      validValues: [
        "Aspirin",
        "Clopidogrel",
        "Glycoprotein IIb/IIIa inhibitors",
        "Warfarin",
      ],
      hasCustom: true,
    }),
  ],
  next: "post-index-page-69",
};
