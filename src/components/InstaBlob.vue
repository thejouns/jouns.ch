<template>
  <a
    href="https://www.instagram.com/joouuns/"
    target="_blank"
    class="blob-wrapper"
  >
    <div class="blob-inst blob"></div>
    <p>instagram</p></a
  >
</template>

<script>
export default {};
</script>

<style lang="scss">
$time: 20s;

.blob-inst {
  animation: blobber $time -3.6s linear infinite,
    cobler $time 0s linear infinite alternate;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    background-image: url("~@/assets/svg/insta.svg");
    background-repeat: no-repeat;
    background-size: 35%;
    background-position: center;
    mix-blend-mode: multiply;
  }
}

@keyframes blobber {
  0% {
    border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  }
  7% {
    border-radius: 69% 31% 71% 29% / 67% 31% 69% 33%;
  }
  14% {
    border-radius: 48% 52% 41% 59% / 66% 37% 63% 34%;
  }
  16% {
    border-radius: 62% 38% 43% 57% / 55% 60% 40% 45%;
  }
  22% {
    border-radius: 61% 39% 51% 49% / 57% 58% 42% 43%;
  }
  25% {
    border-radius: 58% 72% 37% 63% / 45% 44% 56% 91%;
  }
  30% {
    border-radius: 32% 68% 38% 62% / 65% 60% 40% 35%;
  }
  35% {
    border-radius: 63% 55% 34% 80% / 35% 33% 62% 65%;
  }
  40% {
    border-radius: 39% 55% 43% 51% / 55% 71% 29% 45%;
  }
  45% {
    border-radius: 47% 53% 34% 66% / 62% 36% 64% 35%;
  }
  50% {
    border-radius: 44% 56% 32% 68% / 69% 26% 74% 31%;
  }
  55% {
    border-radius: 66% 34% 25% 75% / 47% 30% 70% 53%;
  }
  60% {
    border-radius: 67% 62% 39% 65% / 74% 53% 47% 26%;
  }
  65% {
    border-radius: 73% 27% 46% 54% / 54% 47% 53% 46%;
  }
  70% {
    border-radius: 75% 25% 47% 53% / 49% 53% 47% 51%;
  }
  75% {
    border-radius: 33% 40% 71% 29% / 69% 65% 30% 37%;
  }
  80% {
    border-radius: 48% 52% 68% 32% / 42% 28% 72% 58%;
  }
  85% {
    border-radius: 55% 45% 57% 43% / 73% 61% 39% 27%;
  }
  90% {
    border-radius: 74% 26% 33% 67% / 40% 65% 35% 60%;
  }
  95% {
    border-radius: 58% 42% 57% 43% / 53% 45% 55% 47%;
  }
  100% {
    border-radius: 41% 59% 65% 35% / 73% 50% 50% 27%;
  }
}

@keyframes cobler {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 0%;
  }
}

@keyframes wobbler {
  0% {
    transform: rotateZ(8deg);
  }
  100% {
    transform: rotateZ(-8deg);
  }
}

//
// Page Default Styles
//

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-sizing: border-box;
}

.main {
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
