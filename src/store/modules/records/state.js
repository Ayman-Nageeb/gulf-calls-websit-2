import pages from "@/views/Staff/SetRecord/survey_pages";

let recordFields = {
  code: "",
  id: "",
};
for (let page of pages) {
  const questions = page.questions;
  for (let question of questions) {
    recordFields[question.id()] = "";
  }
}
export default {
  validateAll: false,
  hasValidationError: false,
  selectedRecord: recordFields,
};
