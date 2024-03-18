import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Projekte from "../views/ProjectsSite.vue";
import About from "../views/About.vue";
import Imprint from "../views/Imprint.vue";
import PopUp from "../components/PopUp.vue";

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
    path: "/projects/:projName",
    name: "PopUp",
    component: PopUp
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: Imprint
  }
];

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
    return savedPosition|| {top:0, behavior:'smooth'}
  },

  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
