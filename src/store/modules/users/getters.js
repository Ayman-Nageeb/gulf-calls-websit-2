export default {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  user(state) {
    return state.user;
  },
  authorizationToken(state) {
    return state.authorizationToken;
  },
};
