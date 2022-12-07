import store from "@/store";
import {
  createCategoricalQuestion,
  createSelectQuestion,
  createTextQuestion,
} from "./functions";

const coronaryVesselDiseaseQuestion = createSelectQuestion({
  text: "index Number of coronary vessel disease on CT angiogram or Cath Lab",
  validValues: ["Yes", "No", "Unknown"],
  radioView: true,
});

export default {
  id: "index-page-22",
  title: "Index Data",
  questions: [
    createCategoricalQuestion({
      text: "index Inclusion diagnosis",
      validValues: [
        "Diabetes mellites",
        "Myocardial infarction",
        "Ischemic strock",
        "Peripheral artery disease",
        "Percutaneous Coronary Intervention",
        "Coronary artery bypass grafting",
      ],
    }),
    createTextQuestion({
      text: "index First event date  date (day/month/year)",
      placeholder: "day/month/year",
    }),
    coronaryVesselDiseaseQuestion,
  ],
  next() {
    const coronaryVesselDisease =
      store.getters["Records/selectedRecord"][
        coronaryVesselDiseaseQuestion.id()
      ];

    if (coronaryVesselDisease.trim().toLowerCase() == "yes") {
      return "index-page-22-has-coronary-vessel-disease";
    }

    return "index-page-22-data";
  },
};
