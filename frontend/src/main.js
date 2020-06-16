import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import userRoutes from "./routes/userRoutes";

Vue.use(VueRouter);

Vue.config.productionTip = false;
console.log(userRoutes)
new Vue({
  router:userRoutes,
  render: (h) => h(App),
}).$mount("#app");
