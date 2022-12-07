import store from "@/store";
import { createCategoricalQuestion } from "./functions";
const fibrateTreatmetnTypeQuestion = createCategoricalQuestion({
  text: "pre_index Fibrate treatment type",
  validValues: ["Fenofibrate", "Gemfibrozil", "Bizafibrate"],
});
export default {
  id: "pre-index-page-10",
  title: "Pre Index Data",
  questions: [fibrateTreatmetnTypeQuestion],
  next() {
    const fibrateTreatmetnType =
      store.getters["Records/selectedRecord"][
        fibrateTreatmetnTypeQuestion.id()
      ];

    if (fibrateTreatmetnType.trim().toLowerCase() == "fenofibrate") {
      return "pre-index-page-11";
    }

    if (fibrateTreatmetnType.trim().toLowerCase() == "gemfibrozil") {
      return "pre-index-page-12";
    }

    if (fibrateTreatmetnType.trim().toLowerCase() == "bizafibrate") {
      return "pre-index-page-13";
    }

    return "basic-data";
  },
};
