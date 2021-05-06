<template>
  <div class="wrapper">
    <div class="bg-img"></div>
    <div class="home">
      <div class="home-txt">
        <h1>Jouns</h1>
        <h2>
          Hey! Ich bin Jonas und mache Videos,<br>
          Bilder, Webstuff und so...
        </h2>
      </div>
      <div class="cta-btns">
        <insta-blob></insta-blob>
        <ocular-blob></ocular-blob>
      </div>
    </div>
  </div>
</template>

<script>
import InstaBlob from "@/components/InstaBlob.vue";
import OcularBlob from "@/components/OcularBlob.vue";
export default {
  components: {
    InstaBlob,
    OcularBlob,
  },
};
</script>
<style lang="scss">
.bg-img {
  background-image: url("~@/assets/img/jouns.jpg");
  background-size: 190%;
  background-position: center;
  opacity: 0.16;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 0;
}
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  margin: 0 8vw 0 8vw;
  .home-txt {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 65vh;
    z-index: 1;
  }
  .cta-btns {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
}

@media only screen and (min-width: 1024px) {
  .bg-img {
    background-size: 100%;
    background-position: center;
  }
  .home {
    align-items: left;
    .home-txt{
      height: 80vh;
    }
    .cta-btns {
      width: 30%;
    }
  }
}
</style>
