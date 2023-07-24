<template>
  <div class="landing">
    <div class="sm-cta">
      <a class="social" href="https://instagram.com/joouuns" target="_blank"
        ><svg
          id="Gruppe_404"
          data-name="Gruppe 404"
          xmlns="http://www.w3.org/2000/svg"
          width="35.2"
          height="35.2"
          viewBox="0 0 35.25 35.25"
        >
          <path
            id="Pfad_653"
            data-name="Pfad 653"
            d="M104.567,90.667H93.756a3.092,3.092,0,0,0-3.089,3.089v10.811a3.092,3.092,0,0,0,3.089,3.089h10.811a3.092,3.092,0,0,0,3.089-3.089V93.756A3.092,3.092,0,0,0,104.567,90.667Zm-5.406,12.658a4.163,4.163,0,1,1,4.163-4.163A4.168,4.168,0,0,1,99.162,103.325Zm5.322-8.844a.7.7,0,1,1,.7-.7A.7.7,0,0,1,104.483,94.481Z"
            transform="translate(-81.534 -81.534)"
            fill="#f5f4f3"
          />
          <path
            id="Pfad_654"
            data-name="Pfad 654"
            d="M146.823,143.667a3.156,3.156,0,1,0,3.156,3.156A3.16,3.16,0,0,0,146.823,143.667Z"
            transform="translate(-129.196 -129.196)"
            fill="#f5f4f3"
          />
          <path
            id="Pfad_655"
            data-name="Pfad 655"
            d="M17.627,0A17.627,17.627,0,0,0,0,17.627c.928,23.382,34.329,23.375,35.254,0A17.627,17.627,0,0,0,17.627,0Zm9.5,23.033a4.1,4.1,0,0,1-4.1,4.1H12.221a4.1,4.1,0,0,1-4.1-4.1V12.221a4.1,4.1,0,0,1,4.1-4.1H23.033a4.1,4.1,0,0,1,4.1,4.1Z"
            fill="#f5f4f3"
          />
        </svg>
      </a>
    </div>
    <div class="centered">
      <h1>JOUNS</h1>
      <div class="cta">
        <router-link class="link" to="/projects">
          <svg width="20" height="20">
            <path
              d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zM8.711 4.3l5.7 5.766L8.7 15.711l-1.4-1.422 4.289-4.242-4.3-4.347z"
            />
          </svg>
          See Projects</router-link
        >
      </div>
    </div>
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
    height: 85vh;
    .cta {
      display: flex;
      width: 40rem;
      align-content: center;
      justify-content: center;
      margin: 0;
      .link {
        width: 11rem;
        height: 2rem;
        padding: 1vw;
        color: #f5f4f3;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: scale(1);
        transition-duration: 0.2s;
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
    .sm-cta {
      padding-right: 5vw;
      .social {
        align-self: center;
        padding: 0px;
      }
    }
  }
  .centered {
    .cta {
      justify-content: space-evenly;
      align-content: center;
      .link {
        font-size: 6vw;
        text-align: center;
        margin: 5vh 0 5vh 0;
      }
    }
  }
}
</style>
