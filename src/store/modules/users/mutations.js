export default {
  setAsAuthenticated(state) {
    state.isAuthenticated = true;
  },
  setAsUnAuthenticated(state) {
    state.isAuthenticated = false;
  },
  setUser(state, user) {
    state.user = user;
    window.localStorage.setItem("user", JSON.stringify(user));
  },
  setAuthorizationToken(state, token) {
    state.authorizationToken = token;
    window.localStorage.setItem("authorizationToken", token);
  },
};
