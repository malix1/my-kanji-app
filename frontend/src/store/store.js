import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loggedInUser: {},
  },
  mutations: {
    loginUser: (state, values) => {
      const loggedInUser = { email: values.email, password: values.password };
      state.loggedInUser = loggedInUser;
    },
  },
  getters: {
    getCurrentUser: (state) => {
      return state.loggedInUser;
    },
  },
});
