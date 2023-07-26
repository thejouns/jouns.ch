<template>
  <footer>
    <router-link class="rou-li" to="Imprint"
      >Imprint</router-link
    >
    <p>&copy; 2023 Jonas Kunz</p>
  </footer>
</template>

<script>
export default {
  title: "Jouns - About",
  components: {}
};
</script>

<style lang="scss">
footer {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 10vh;
  width: 100%;
  flex-direction: row;
  bottom: 0;
  p,
  a {
    color: #aaaaaa;
    margin: 0;
    padding-bottom: 2vh;
  }
  .rou-li {
    padding-right: 1.5rem;
  }
}
</style>
