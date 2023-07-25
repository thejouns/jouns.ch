<template>
  <div class="about">
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
    <about-content></about-content>
  </div>
</template>

<script>
import AboutContent from "@/components/AboutContent.vue";

export default {
  title: "Jouns - About",
  components: {
    AboutContent,
  },
};
</script>

<style lang="scss">
.about {
  display: flex;
  justify-content: center;
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
  }
}
@media only screen and (max-width: 1024px) {
  .about {
    #backgroundVid {
      height: 120vh;
    }
  }
}
</style>
