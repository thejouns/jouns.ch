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
</style>
