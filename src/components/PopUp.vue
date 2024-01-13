<template>
  <div class="project-popup">
    <div class="popup-box">
    <h1>test</h1>
    <button @click="TogglePopup()">Schiessen</button>
  </div>
  </div>
</template>

<script>
export default {
 props: [
  'TogglePopup'
 ]
}
</script>

<style lang="scss">
.project-popup{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0.2);
  .popup-box{
    width: 80vw;
    height: 80vh;
    background: #ffffff;
    display: flex;
    align-items: center;
    flex-direction: column;
    h1{
      color: #000000;
    }
  }
}

</style>