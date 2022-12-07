import state from "./state";

export default {
  setAttribute(state, attribute) {
    state.selectedRecord[attribute.id] = attribute.value;
  },
  setRecord(state, record) {
    state.selectedRecord = record;
  },
  reSetSelectedRecord(state) {
    state.selectedRecord = {
      age: null,
      gender: null,
      nationality: null,
      education: null,
    };
  },
  validateAll(state) {
    state.validateAll = true;
  },
  invalidateAll() {
    state.validateAll = false;
  },
  hasValidateError(state, hasError = true) {
    state.hasValidationError = Boolean(hasError);
  },
};
