<template>
  <div class="HeaderVue">
    <header :class="{ background: headerBoolean }">
      <div class="space2"></div>
      <div class="logo-container">
        <a class="logo" href="/">JOUNS </a>
      </div>
      <ul class="navbar" v-bind:class="{ navactive: toggleNav }">
        <router-link class="rou-li" @click.native="navSlide()" to="/">HOME</router-link>
        <router-link class="rou-li" @click.native="navSlide()" to="/about"
          >ABOUT</router-link
        >
        <router-link class="rou-li" @click.native="navSlide()" to="/projects"
          >PROJECTS</router-link
        >
      </ul>

      <div class="space"></div>
      <div
        class="burger"
        @click="navSlide()"
        v-bind:class="{ toggle: toggleNav }"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  data() {
    return {
      toggleNav: false,
      headerBoolean: false,
      scrollPosition: null
    };
  },
  methods: {
    navSlide() {
      this.toggleNav = !this.toggleNav;
    },
    checkRoute() {
      if (this.$route.name !== "Home") {
        console.log("ayyyyo, ds isch gheimi nachricht ... pssshht!");
        this.headerBoolean = true;
      }
    }
  },
  created() {
    window.addEventListener("load", this.checkRoute);
  },
  watch: {
    $route: "checkRoute"
  }
};
</script>

<style lang="scss" scoped>
.background {
  background: #141414;
  .logo-container {
    display: flex;
  }
}
header {
  display: flex;
  width: 100%;
  height: 8vh;
  margin: 0px;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  position: fixed;
  z-index: 100;
  top: 0;
  .logo-container {
    flex: 4;
    display: none;
    padding-left: 5vw;
    .logo {
      font-size: 2.5rem;
      font-weight: 700;
      fill: #f5f4f3;
    }
  }
  .navbar {
    flex: 6;
    display: flex;
    list-style: none;
    padding: 0vh 0 0vh 0;
    overflow-x: hidden;
    position: fixed;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0em;
    left: 0em;
    height: 100vh;
    top: 0;
    transform: translateX(100%);
    transition: transform 0.2s ease-in;
    background: #141414;
    margin: 0px;
    .rou-li {
      letter-spacing: 0.1rem;
      text-decoration: none;
      text-transform: capitalize;
      font-weight: 400;
      color: #f5f4f3;
      font-size: 6vw;
      font-weight: 300;
    }
  }
  .navactive {
    transform: translateX(0%);
  }
  .burger {
    margin-right: 3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    justify-self: flex-end;
    cursor: pointer;
    max-width: 4.5rem;
    div {
      width: 3.5rem;
      height: 0.3rem;
      margin: 0.25rem;
      background-color: #f5f4f3;
      transition: all 0.5s ease;
    }
    .line1 {
      max-width: 2.5rem;
      align-self: flex-end;
    }
    .line3 {
      max-width: 2.5rem;
    }
    .toggle .line1 {
      transform: rotate(-45deg) translate(0rem, 0rem);
      z-index: 100;
      background-color: #141d23;
      position: fixed;
      transition: 0.3s ease;
      max-width: 4rem;
      padding: 0;
    }
    .toggle .line2 {
      opacity: 0;
    }
    .toggle .line3 {
      transform: rotate(45deg) translate(0rem, 0rem);
      z-index: 10;
      background-color: #1f2d35;
      position: fixed;
      max-width: 4rem;
    }
  }
  .toggle {
    div {
      background-color: #f5f4f3;
      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    }
    .line1 {
      transform: rotate(-45deg) translate(-0.1rem, 0.9rem);
      transition: 0.3s ease;
      max-width: 4rem;
    }
    .line2 {
      opacity: 0;
    }
    .line3 {
      transform: rotate(45deg) translate(-0.3rem, -1rem);
      max-width: 4rem;
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
