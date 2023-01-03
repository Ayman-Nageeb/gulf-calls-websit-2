import state from "./state";
import store from "@/store";

export default {
  setAttribute(state, attribute) {
    state.selectedRecord[attribute.id] = attribute.value;
  },
  setRecord(state, record) {
    state.selectedRecord = record;
  },
  reSetSelectedRecord(state) {
    const center = store.getters["User/user"].center;
    state.selectedRecord = {
      age: null,
      gender: null,
      nationality: null,
      education: null,
      code: center.country_code + center.number + "0000",
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
