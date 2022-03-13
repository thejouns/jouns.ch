<template>
  <div class="wrapper">
    <article class="home-cover">
      <video playsinline autoplay muted loop id="video">
        <source src="@/assets/vid/jouns_background.mp4" type="video/mp4" />
      </video>
    </article>
    <div class="content-wrapper">
      <header>
        <h2 class="jouns">jouns</h2>
      </header>
      <div class="home-links">
        <router-link id="hlink" to="about">about</router-link>
        <a id="hlink" target="_blank" href="https://ocular.ch">work</a>
        <a id="hlink" href="mailto:jonas@ocular.ch">contact</a>
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
      top: 0;
      bottom: 0;
      position: absolute;
      object-fit: cover;
      object-position: center;
      z-index: 0;
    }
  }
  .content-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    header {
      .jouns {
        font-size: 3rem;
        font-family: eurostile-extended, sans-serif;
        font-weight: 900;
        letter-spacing: 0.2rem;
        font-style: normal;
        z-index: 1;
        color: #fff;
        margin-left: 7vw;
      }
    }
    .home-links {
      min-width: 100%;
      width: 100vw;
      height: 90vh;
      display: flex;
      align-items: center;
      justify-content: space-around;
      a {
        button:focus {
          outline: none;
        }
        color: white;
        text-decoration: none;
        font-size: 12rem;
        z-index: 1;
        mix-blend-mode: difference;
        filter: brightness(100%);
        &:hover {
          mix-blend-mode: hue;
          color: rgb(81, 176, 214);
        }
      }
    }
  }
}
</style>
