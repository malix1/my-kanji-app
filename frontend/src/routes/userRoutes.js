import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import Logout from "../components/Logout";

const userRoutes = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
    {
      path: "/logout",
      component: Logout,
    },
  ],
  mode: "history",
});

export default userRoutes;
