import store from "@/store";
import { createCategoricalQuestion } from "./functions";
const fibrateTreatmetnTypeQuestion = createCategoricalQuestion({
  text: "index Fibrate treatment type",
  validValues: ["Fenofibrate", "Gemfibrozil", "Bizafibrate"],
});
export default {
  id: "index-page-30",
  title: "Index Data",
  questions: [fibrateTreatmetnTypeQuestion],
  next() {
    const fibrateTreatmetnType =
      store.getters["Records/selectedRecord"][
        fibrateTreatmetnTypeQuestion.id()
      ];

    if (fibrateTreatmetnType.trim().toLowerCase() == "fenofibrate") {
      return "index-page-31";
    }

    if (fibrateTreatmetnType.trim().toLowerCase() == "gemfibrozil") {
      return "index-page-32";
    }

    if (fibrateTreatmetnType.trim().toLowerCase() == "bizafibrate") {
      return "index-page-33";
    }

    return "basic-data";
  },
};
