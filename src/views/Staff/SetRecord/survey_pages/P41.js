import { createSelectQuestion } from "./functions";

export default {
  id: "index-page-41",
  title: "Index Data",
  questions: [
    createSelectQuestion({
      text: "index Anticoagulant treatment type",
      validValues: [
        "Aspirin",
        "Clopidogrel",
        "Glycoprotein IIb/IIIa inhibitors",
        "Warfarin",
      ],
      hasCustom: true,
      radioView: true,  
    }),
  ],
  next: "post-index-page-42",
};
