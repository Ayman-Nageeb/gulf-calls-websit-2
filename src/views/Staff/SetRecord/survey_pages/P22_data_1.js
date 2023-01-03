import store from "@/store";
import { createCategoricalQuestion } from "./functions";

const measuringQuestion = createCategoricalQuestion({
  text: "index Unit used for measuring",
  validValues: ["mmol/l", "mg/dl"],
  isRequired: true,
});

export default {
  id: "index-page-22-1-data",
  title: "Index Data",
  questions: [measuringQuestion],
  next() {
    const measuringUnit =
      store.getters["Records/selectedRecord"][measuringQuestion.id()];
    if (measuringUnit == "mmol/l") {
      return "mmol_l-index-data-page-23";
    }
    if (measuringUnit == "mg/dl") {
      return "mg_dl-index-data-page-24";
    }
    return "basic-data";
  },
};
