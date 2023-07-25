<template>
  <div class="HeaderVue">
    <header :class="{ background: headerBoolean }">
      <div class="space2"></div>
      <div class="logo-container">
        <a class="logo" href="/"
          ><svg
            version="1.1"
            id="Ebene_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1000 1000"
            style="enable-background: new 0 0 1000 1000"
            xml:space="preserve"
          >
            <path
              class="st0"
              d="M927.5,88c-32-43.8-89.4-53.2-132.7-53.2c-0.7,0-1.4,0-2.1,0c-54,0.4-105.9,15.6-154,32.1
	c-173.4,59.4-330.7,159.1-469.4,247c-1.5,1-4.6,2.7-8.2,4.6l-0.1,0.1c-32.4,18.1-57.3,33.9-58.3,57.7c-0.3,8.9,2,16.8,6.7,23.1
	c4.2,5.5,16.6,17.5,39.8,9.6c9.8-3.3,18.9-9.3,24.4-12.9l28.8-18.4C339.6,290.3,481.6,200,634.5,142.5
	c62.2-23.4,110.3-34.9,155.9-37.4c22.5-1.2,62.7,0.5,79.2,24.6c14.5,21.2,5.8,56.7-7.1,83c-27,54.8-70.9,100.4-106.1,134.1
	c-7.4,7.1-15,14.1-22.7,21.1l-8-4.7c-22.9-13.5-46.2,1.8-57.3,9.1l-1.8,1.2c-168,108.6-361.6,243.5-523.9,420.1
	c-31.3,34-63.4,71.7-85.7,116.8l-0.2,0.3c-2.3,4.8-7.8,15.9-4,29.5c0.1,0.6,0.4,1.2,0.6,1.8c1.6,4.2,4.1,8.1,7.2,11.3l2.3,2.4
	c2.8,3,6.2,5.4,9.9,7c0.4,0.2,0.8,0.3,1.1,0.4c4.2,1.5,8.8,2.3,13.7,2.3c10.4,0,21.9-3.7,31.5-10.1c21.7-14.5,42-30.7,61.6-46.3
	l0.8-0.7c14.1-11.3,28.6-23,43.2-33.6c21.2-15.3,41.2-32.9,60.6-49.9c11.1-9.7,21.9-19.1,32.6-27.9c10.7-8.8,20.2-16.1,30.6-24.1
	c20.4-15.8,43.6-33.7,63.5-53.4c66.8-55.1,133-109.8,197-162.8c13.6-11.3,28.5-23.5,45.6-37.4c47.8-39,97.2-79.3,143.4-122.9
	c27.1-25.7,53.1-52.8,77.2-80.6c12.8-14.7,26.3-30.8,38-49.5c9-14.3,16.6-29.4,22.6-45C955.3,170.4,952.3,121.8,927.5,88z"
            />
          </svg>
        </a>
      </div>
      <ul class="navbar" v-bind:class="{ navactive: toggleNav }">
        <a class="rou-li" @click.native="navSlide()" href="/"
          >HOME</a
        >
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
        this.headerBoolean = true;
      }
    },
  },
  created() {
    window.addEventListener("load", this.checkRoute);
  },
  watch: {
    $route: "checkRoute",
  },
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
    display: flex;
    padding-left: 5vw;
    padding-top: 1rem;
    .logo {
      font-size: 2.5rem;
      font-weight: 700;
      width: 3rem;
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
      font-size: 1.5rem;
      line-height: 100%;
      letter-spacing: 0.1px;
      font-weight: 700;
      color: #f5f4f3;
      font-size: 6vw;
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
      height: 5px;
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
    .logo-container {
      margin-left: 3rem;
      padding: 0;
      .logo {
        margin-left: 0vw;
      }
    }
    .navbar{
      .rou-li{
        font-size: 18vw;
        line-height: 130%;
      }
    }
  }
}
</style>
