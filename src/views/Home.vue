<template>
  <div class="wrapper">
    <article class="home-cover">
      <video playsinline autoplay muted loop id="video">
        <source src="@/assets/vid/jouns_background.mp4" type="video/mp4" />
      </video>
    </article>
    <div class="content">
      <div class="home-links">
        <router-link id="hlink" to="about">about</router-link>
        <a id="hlink" target="_blank" href="https://ocular.ch">work</a>
        <a id="hlink" href="mailto:jonas@ocular.ch">contact</a>
      </div>
      <div class="cta-btns">
        <insta-blob></insta-blob>
        <ocular-blob></ocular-blob>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  padding: 0;
  .home-cover {
    min-height: 100vh;
    width: 100%;
    background-size: cover;
    #video {
      width: 100%;
      height: 100vh;
      left: 0;
      position: absolute;
      object-fit: cover;
      object-position: center;
      z-index: 0;
    }
  }
  .content {
    margin-top: 10vh;
    height: 90vh;
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1;
    .home-links {
      width: 80vw;
      display: flex;
      justify-content: space-around;
      #hlink {
        color: white;
        text-decoration: none;
        mix-blend-mode:overlay;
        font-size: 12rem;
      }
    }
  }
}
</style>
