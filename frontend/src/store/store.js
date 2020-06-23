import Vue from "vue";
import Vuex from "vuex";
import { loginUser } from "../api/userService";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loggedInUser: "",
  },
  mutations: {
    loginUser: async (state, values) => {
      const user = { username: values.email, password: values.password };
      const response = await loginUser(user);
      if (response.status == 200) {
        state.loggedInUser = response.data.token;
      }
    },
  },
  getters: {
    getCurrentUser: (state) => {
      return state.loggedInUser;
    },
  },
});
