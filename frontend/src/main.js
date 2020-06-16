import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Antd from 'ant-design-vue';
import userRoutes from "./routes/userRoutes";
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(VueRouter);

Vue.config.productionTip = false;
new Vue({
  router:userRoutes,
  render: (h) => h(App),
}).$mount("#app");
