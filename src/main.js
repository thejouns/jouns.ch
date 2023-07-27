import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import titleMixin from "./mixins/titleMixin";
import VueSmoothScroll from "vue2-smooth-scroll";
import VueI18n from "vue-i18n";
import i18n from "./i18n";

Vue.mixin(titleMixin);

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
});

Vue.config.productionTip = false;

//import router
router.beforeEach((to, from, next)=>{
  // use the language from the routing param or default
  let language = to.params.lang;
  if (!language){
    language = 'en'
  }
  i18n.locale = language
  next()
})

new Vue({
  router,
  store,
  i18n,

  render: function (h) {
    return h(App);
  },
}).$mount("#app");

Vue.use(VueI18n);
