import { createNumericalQuestion } from "./functions";

export default {
  id: "index-page-22-has-coronary-vessel-disease",
  title: "Index Data",
  questions: [
    createNumericalQuestion({
      text: "index Number of coronary vessel disease on CT angiogram or Cath Lab",
      range: { min: 0, max: 100, step: 1 },
    }),
  ],
  next: "index-page-22-data",
};
