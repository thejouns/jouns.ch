<template>
  <div id="app">
    <header-vue></header-vue>
    <language-switcher></language-switcher>
    <router-view />
  </div>
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
export default {
  components: {
    HeaderVue,
    LanguageSwitcher
  },
};
</script>

<style lang="scss">
@import "general.scss";
</style>
