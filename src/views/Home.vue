<template>
  <div class="home">
    <div class="content">
      <h1>directed by jouns</h1>
    </div>
    <video playsinline autoplay muted loop id="backgroundVid" poster="@/assets/img/poster.png">
      <source src="@/assets/vid/Reel.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>
<style lang="scss">
.home {
  #backgroundVid {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .content {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
@media only screen and (max-width: 1080px) {
  .home{
    #backgroundVid {
      height: 120vh;
    }
    .content{
      h1{
        font-size: 7vw;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .home-wrapper {
    background-position: center;
    .content-wrapper {
      width: 100vw;
      height: 100vh;
      flex-direction: column;
      justify-content: start;
      .home-title {
        padding: 2rem;
        height: 50vh;
        width: 100vw;
        .jouns {
          margin: 0;
        }
      }
      .home-links {
        margin: 10vh 7vw 20vh 0;
        width: 100vw;
        padding: 0;
      }
    }
  }
}
</style>
