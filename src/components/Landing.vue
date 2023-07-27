<template>
  <div class="landing">
    <div class="centered">
      <h1>JOUNS</h1>
      <div class="cta">
        <router-link class="link" to="/projects">
          <svg width="20" height="20">
            <path
              d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"
            />
          </svg>
          Projekte Ansehen</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingVue",
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
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .sm-cta {
    height: 10vh;
    display: flex;
    justify-content: flex-end;
    .social {
      align-self: flex-end;
      height: 4vh;
      padding-right: 8vh;
    }
  }
  .centered {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 90vh;
    .cta {
      display: flex;
      width: 40rem;
      align-content: center;
      justify-content: center;
      margin: 0;
      .link {
        width: 25rem;
        height: 2rem;
        padding: 1vw;
        color: #f5f4f3;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(1);
        transition-duration: 0.2s;
        font-weight: 500;
        &:hover {
          transform: scale(1.07);
        }
        svg {
          fill: #f5f4f3;
          margin-right: 1rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 1024px) {
  .landing {
    overflow-x: hidden;
    overflow: hidden;
    flex-direction: column;
    h1 {
      font-size: 23vw;
    }
    .sm-cta {
      padding-right: 5vw;
      display: none;
      .social {
        align-self: center;
        padding: 0px;
      }
    }
  }
  .centered {
    padding-top: 5vh;
    .cta {
      justify-content: space-evenly;
      align-content: center;
      width: 100vw;
      .link {
        width: 70vw;
        font-size: 6vw;
        text-align: center;
        margin: 5vh 0 5vh 0;
      }
    }
  }
}
</style>
