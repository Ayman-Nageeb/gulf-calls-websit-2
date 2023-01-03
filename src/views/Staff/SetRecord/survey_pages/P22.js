import store from "@/store";
import {
  createMultiSelectQuestion,
  createSelectQuestion,
  createTextQuestion,
} from "./functions";

const coronaryVesselDiseaseQuestion = createSelectQuestion({
  text: "index coronary vessel disease on CT angiogram or Cath Lab",
  validValues: ["Yes", "No", "Unknown"],
  radioView: true,
  isRequired: true,
});

export default {
  id: "index-page-22",
  title: "Index Data",
  questions: [
    createMultiSelectQuestion({
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
      text: "index inclusion diagnosis date",
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
