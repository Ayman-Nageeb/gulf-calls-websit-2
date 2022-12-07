import { createSelectQuestion } from "./functions";

export default {
  id: "post-index-page-68",
  title: "Post Index Data",
  questions: [
    createSelectQuestion({
      text: "Post index Anticoagulant treatment type",
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
  next: "post-index-page-69",
};
