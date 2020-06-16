import VueRouter from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Login from "../components/Login";
import Register from "../components/Register";

const userRoutes = new VueRouter({
  routes: [
    {
      path: "/",
      component: HelloWorld,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/register",
      component: Register,
    },
  ],
  mode:"history"
});

export default userRoutes