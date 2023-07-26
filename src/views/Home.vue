<template>
  <div class="home">
    <video
      :class="{ change_blur: scrollBoolean }"
      playsinline
      autoplay
      muted
      loop
      id="backgroundVid"
      poster="@/assets/img/poster.png"
    >
      <source src="@/assets/vid/Reel.mp4" type="video/mp4" />
    </video>
    <landing-vue></landing-vue>
  </div>
</template>

<script>
import LandingVue from "@/components/Landing.vue";
export default {
  title: "Jouns - Portfolio",
  components: {
    LandingVue
  },
  data() {
    return {
      scrollBoolean: false,
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      if (this.$route.path === "/") {
        this.scrollPosition = window.scrollY;
        if (this.scrollPosition < 400) {
          this.scrollBoolean = false;
        } else if (this.scrollPosition > 400) {
          this.scrollBoolean = true;
        }
      } else {
        this.scrollBoolean = true;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.updateScroll);
  }
};
</script>
<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  #backgroundVid {
    object-fit: cover;
    filter: saturate(0);
    width: 100vw;
    height: 100vh;
    scale: 1.05;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    transition: 1s;
  }
  .change_blur {
    filter: blur(10px);
  }
}
@media only screen and (max-width: 1024px) {
  .home {
    #backgroundVid {
      height: 120vh;
    }
    .content {
      h1 {
        font-size: 7vw;
      }
    }
  }
}
</style>
