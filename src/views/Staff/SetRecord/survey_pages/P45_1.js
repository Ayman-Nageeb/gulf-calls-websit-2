import store from "@/store";
import { createCategoricalQuestion } from "./functions";

const measuringQuestion = createCategoricalQuestion({
  text: "post index Unit used for measuring",
  validValues: ["mmol/l", "mg/dl"],
  isRequired: true,
});

export default {
  id: "post-index-page-45-1",
  title: "Post Index Data",
  questions: [measuringQuestion],
  next() {
    const measuringUnit =
      store.getters["Records/selectedRecord"][measuringQuestion.id()];
    if (measuringUnit == "mmol/l") {
      return "mmol_l-post_index-data-page-46";
    }
    if (measuringUnit == "mg/dl") {
      return "mg_dl-post_index-data-page-47";
    }
    return "basic-data";
  },
};
