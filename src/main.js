import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import titleMixin from './mixins/titleMixin';
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.mixin(titleMixin)

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");
