<template>
  <div class="wrapper">
    <article class="home-cover"></article>
    <div class="content-wrapper">
      <div class="home-title">
        <h1 class="jouns">jouns</h1>
        <a target="_blank" href="https://instagram.com/joouuns">instagram</a>
      </div>
      <div class="home-links">
        <router-link class="routes" id="hlink" to="shots">shots</router-link>
        <a class="routes" id="hlink" target="_blank" href="https://ocular.ch/filme"
          >projects</a
        >
      </div>
    </div>
    <footer><p>© 2022 JOUNS</p></footer>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.wrapper {
  display: flex;
  padding: 0;
  margin: 0;
  background-image: url(~@/assets/img/bg.jpg);
  background-position-x: center;
  background-position-y: 38%;
  background-size: cover;
}
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20vh;
  height: 100vh;
  flex-direction: row;
  .home-title {
    height: 50vh;
    display: flex;
    flex-direction: column;
    margin-left: 7vw;
    width: 40vw;
    .jouns {
      z-index: 1;
      margin: 0;
    }
  }
}
.home-links {
  min-width: 10vw;
  width: 50vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: right;
  text-align: right;
  padding-right: 40vw;
  justify-content: space-around;
}
@media only screen and (max-width: 1024px) {
  .wrapper {
    background-position: center;
    flex-direction: column;
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
        margin: 10vh 7vw 10vh 0;
        width: 100vw;
        padding: 0;
      }
    }
  }
}
</style>
