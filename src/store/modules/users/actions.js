export default {
  async login(context, payload) {
    context.commit("setAuthorizationToken", payload.token);
    context.commit("setUser", payload.user);
    context.commit("setAsAuthenticated");
    window.localStorage.setItem("authorizationToken", payload.token);
    window.localStorage.setItem("user", JSON.stringify(payload.user));
  },
  logout(context) {
    context.commit("setAuthorizationToken", null);
    context.commit("setUser", null);
    context.commit("setAsUnAuthenticated");

    window.localStorage.removeItem("authorizationToken");
    window.localStorage.removeItem("user");
  },
};
