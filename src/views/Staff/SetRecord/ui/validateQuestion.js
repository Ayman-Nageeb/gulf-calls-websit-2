import store from "@/store";

export const validateQuestions = function (questions) {
  for (let q of questions) {
    console.log("validating question :", q.type);
    console.log("validating question :", q.id());
    if (!q.isRequired) continue;
    switch (q.type.toLocaleLowerCase()) {
      case "numeric":
        if (!validateNumericalQuestion(q)) return false;
        break;
      case "categorical":
        if (!validateCategoricalQuestion(q)) return false;
        break;
      case "select":
        if (!validateSelectQuestion(q)) return false;
        break;
      case "text":
        if (!validateTextQuestion(q)) return false;
        break;
      default:
        break;
    }
  }
  return true;
};

export const addedValueForCustomField = "** Custom ** (enter value manually)";

export const validateNumericalQuestion = function (question) {
  const val = Number(store.getters["Records/selectedRecord"][question.id()]),
    min = Number(question.range.min),
    max = Number(question.range.max);
  if (!val || isNaN(val) || val < min || val > max) {
    return false;
  }
  return true;
};

export const validateCategoricalQuestion = function (question) {
  const val = store.getters["Records/selectedRecord"][question.id()];
  if (!val || !question.validValues.includes(val)) {
    return false;
  }
  return true;
};

export const validateSelectQuestion = function (question) {
  const val = store.getters["Records/selectedRecord"][question.id()];
  if (!val || val.trim() == "") return false;
  if (!question.hasCustom && !question.validValues.includes(val)) return false;
  return true;
};

export const validateTextQuestion = function (question) {
  const val = "" + store.getters["Records/selectedRecord"][question.id()];
  if (!val || val.trim() == "") return false;
  return true;
};
