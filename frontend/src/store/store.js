import Vue from "vue";
import Vuex from "vuex";
import { loginUser } from "../api/userService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loggedInUser: "",
  },
  mutations: {
    loginUser: (state, token) => {
      state.loggedInUser = token;
    },
  },
  actions: {
    loginUser: async (context, values) => {
      const user = { username: values.email, password: values.password };
      const response = await loginUser(user);
      if (response.status == 200) {
        context.commit("loginUser", response.data.token)
      }
    },
  },
  getters: {
    getCurrentUser: (state) => {
      console.log(state.loggedInUser)
      return state.loggedInUser;
    },
  },
});
