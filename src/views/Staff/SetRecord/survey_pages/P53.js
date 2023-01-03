import store from "@/store";
import { createCategoricalQuestion } from "./functions";
const fibrateTreatmetnTypeQuestion = createCategoricalQuestion({
  text: "Post index Fibrate treatment type",
  validValues: ["Fenofibrate", "Gemfibrozil", "Bizafibrate"],
  isRequired: true,
});
export default {
  id: "post-index-page-53",
  title: "Post Index Data",
  questions: [fibrateTreatmetnTypeQuestion],
  next() {
    const fibrateTreatmetnType =
      store.getters["Records/selectedRecord"][
        fibrateTreatmetnTypeQuestion.id()
      ];

    if (fibrateTreatmetnType.trim().toLowerCase() == "fenofibrate") {
      return "post-index-page-54";
    }

    if (fibrateTreatmetnType.trim().toLowerCase() == "gemfibrozil") {
      return "post-index-page-55";
    }

    if (fibrateTreatmetnType.trim().toLowerCase() == "bizafibrate") {
      return "post-index-page-56";
    }

    return "basic-data";
  },
};
