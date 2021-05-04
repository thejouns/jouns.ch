<template>
  <div class="home">
    <h1>Jouns</h1>
    <h2>oha krassi site bro!</h2>
    <div class="cts-btns">
      <blob-button></blob-button>
    </div>
  </div>
</template>

<script>
import BlobButton from "@/components/BlobButton.vue";
export default {
  components: {
    BlobButton,
  },
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>
