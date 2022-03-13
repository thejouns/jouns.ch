import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shots from "../views/Shots.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shots",
    name: "Shots",
    component: Shots,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
