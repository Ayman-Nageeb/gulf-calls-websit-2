import { createMultiSelectQuestion } from "./functions";

export default {
  id: "index-page-41",
  title: "Index Data",
  questions: [
    createMultiSelectQuestion({
      text: "index Anticoagulant treatment type",
      validValues: [
        "Aspirin",
        "Clopidogrel",
        "Glycoprotein IIb/IIIa inhibitors",
        "Warfarin",
      ],
      hasCustom: true,
    }),
  ],
  next: "post-index-page-42",
};
