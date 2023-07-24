<template>
  <div class="HeaderVue">
    <header :class="{ change_color: scrollBoolean }">
      <div class="space2"></div>
      <div class="logo-container">
        <router-link to="/">JOUNS </router-link>
      </div>

      <div class="space"></div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      toggleNav: false,
      scrollBoolean: false,
      scrollPosition: null,
    };
  },
  methods: {
    navSlide() {
      this.toggleNav = !this.toggleNav;
    },
    checkRoute() {
      if (this.$route.name !== "Home") {
        console.log("ayyyyo, ds isch gheimi nachricht ... pssshht!");
        this.scrollBoolean = true;
      }
    },
  },
  created() {
    window.addEventListener("load", this.checkRoute);
  },
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  width: 100%;
  height: 8vh;
  margin: 0;
  align-items: center;
  justify-content: space-around;
  background: #141414;
  position: fixed;
  z-index: 100;
  top: 0;
  .logo-container {
    flex: 4;
    display: flex;
    padding-left: 5vw;
    .logo {
      width: 10rem;
      fill: #f5f4f3;
    }
  }
}
@media only screen and (max-width: 1024px) {
  header {
    overflow-x: hidden;
    min-height: 12vh;
    position: fixed;
    transition: all 0.5s ease-in;
    justify-content: space-around;
    .logo-container {
      justify-content: center;
      padding: 0;
      .logo {
        margin-left: 0vw;
      }
    }
  }
}
</style>
