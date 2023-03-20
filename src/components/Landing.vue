<template>
  <div class="landing">
    <h1>... mit jouns</h1>
    <div class="cta">
      <a href="https://instagram.com/joouuns" target="_blank">Instagram</a>
      <a href="https://ocular.ch" target="_blank">ocular collective</a>
    </div>
    <a
      href="#projects"
      class="down-link down-arrow"
      data-ca3_iconfont="ETmodules"
      data-ca3_icon=""
      v-smooth-scroll
    ></a>
  </div>
</template>

<script>
export default {
  name: "LandingVue"
};
</script>

<style lang="scss">
html body [data-ca3_iconfont="ETmodules"]::before {
  font-family: "ETmodules";
}
[data-ca3_icon]::before {
  font-weight: normal;
  content: attr(data-ca3_icon);
}
.landing {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: transparent;
  .cta{
    display: flex;
    width: 40rem;
    align-content: center;
    justify-content: space-between;
    margin: 0;
    a{
      text-decoration: underline;
    }
  }
  .down-arrow {
    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2hldnJvbl90aGluX2Rvd24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwIDIwIiBmaWxsPSJ3aGl0ZSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTE3LjQxOCw2LjEwOWMwLjI3Mi0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwYzAuMjcsMC4yNjgsMC4yNzEsMC43MDEsMCwwLjk2OWwtNy45MDgsNy44M2MtMC4yNywwLjI2OC0wLjcwNywwLjI2OC0wLjk3OSwwbC03LjkwOC03LjgzYy0wLjI3LTAuMjY4LTAuMjctMC43MDEsMC0wLjk2OWMwLjI3MS0wLjI2OCwwLjcwOS0wLjI2OCwwLjk3OSwwTDEwLDEzLjI1TDE3LjQxOCw2LjEwOXoiLz48L3N2Zz4=);
    background-size: contain;
    background-repeat: no-repeat;
  }
  .down-link {
    cursor: pointer;
    height: 17rem;
    width: 5rem;
    margin: 0px 0 0 -2.5rem;
    line-height: 6rem;
    position: absolute;
    left: 50%;
    bottom: 0px;
    color: #fff;
    text-align: center;
    z-index: 100;
    text-decoration: none;
    text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4);

    -webkit-animation: ca3_fade_move_down 2s ease-in-out infinite;
    -moz-animation: ca3_fade_move_down 2s ease-in-out infinite;
    animation: ca3_fade_move_down 2s ease-in-out infinite;
  }
  /*animated scroll arrow animation*/
  @-webkit-keyframes ca3_fade_move_down {
    0% {
      -webkit-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @-moz-keyframes ca3_fade_move_down {
    0% {
      -moz-transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      -moz-transform: translate(0, 20px);
      opacity: 0;
    }
  }
  @keyframes ca3_fade_move_down {
    0% {
      transform: translate(0, -20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(0, 20px);
      opacity: 0;
    }
  }
}
@media only screen and (max-width: 1024px) {
    h1{
        font-size: 11vw;
    }
    .landing{
      h1{
        height: 10vh;
      }
      .cta{
        height: 20vh;
        width: 50vw;
        flex-direction: column;
        justify-content: space-evenly;
        align-content: center;
        a{
          font-size: 3vw;
          text-align: center;
        }
      }
      .down-link{
        height: 20vh;
      }
    }
}
</style>
