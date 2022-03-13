<template>
  <div class="shots-wrapper">
    <article class="home-cover"></article>
    <div class="content-wrapper">
      <div class="shots-title">
        <h2 class="jouns">under construction</h2>
        <router-link id="hlink" to="/">back home</router-link>
      </div>
    </div>
    <footer><p>© 2022 JOUNS</p></footer>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss">
.shots-wrapper{
    background-image: url(~@/assets/img/shots.jpg);
    background-position: center;
    background-size: cover;
    .content-wrapper{
        width: 100vw;
        .shots-title{
            width: 100vw;
            padding: 10vw;
        }
    }
}
</style>
