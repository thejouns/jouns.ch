import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projekte from "../views/ProjectsSite.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projekte",
    component: Projekte
  },
  {
    path: "/about",
    name:"About",
    component: About
  }
];

const router = new VueRouter({
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth"
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
  
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
