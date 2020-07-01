import VueRouter from "vue-router";
import HomePage from "../components/HomePage";
import Login from "../components/Login";
import Register from "../components/Register";
import Logout from "../components/Logout";
import Kanji from "../components/Kanji";

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
    {
      path: "/kanji/:detailedKanji",
      component: Kanji,
    },
  ],
  mode: "history",
});

export default userRoutes;
