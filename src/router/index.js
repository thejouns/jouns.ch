import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projekte from "../views/ProjectsSite.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/projects",
    name: "Projekte",
    component: Projekte,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
