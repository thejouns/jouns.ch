<template>
  <div class="about-content">
    <div class="pb"><img src="@/assets/img/pb.jpg" alt="" /></div>
    <div class="bio">
      <h3>JOUNS</h3>
      <p>
        Jonas Kunz, a.k.a. Jouns, ist ein aufstrebender Director und DP in Bern.
        Schon früh nahm er seine erste Kamera in die Hand, um alles zu filmen
        und zu fotografieren, was ihm vor die Linse lief. Im Jahr 2020 gründete
        Jonas zusammen mit den Gleichgesinnten Andrin Schranz und Cedric Ribi
        das "Ocular Collective" (<a target="_blank" href="https://ocular.ch">ocular.ch</a>).
        Seitdem hat Jonas bereits zahlreiche Musikvideos, Dokumentarfilme und
        sonstige Kurzfilme aller Art realisiert.
      </p>
      <div class="sm-cta">
        <a class="icon" href="https://instagram.com/joouuns" target="_blank"
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
        <a class="icon" href="mailto:info@ocular.ch" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32.25"
            height="32.25"
            viewBox="0 0 32.25 32.25"
          >
            <path
              id="mail"
              d="M16.125,0A16.125,16.125,0,1,0,32.25,16.125,16.114,16.114,0,0,0,16.125,0Zm7.812,21.734H9.815a1.9,1.9,0,0,1-1.9-1.9V12.519a1.818,1.818,0,0,1,.6-1.4h0a1.9,1.9,0,0,1,1.3-.5h12.72a2.109,2.109,0,0,1,1.3.5h0a1.977,1.977,0,0,1,.6,1.4v4.507a.5.5,0,1,1-1,0V12.519a.6.6,0,0,0-.1-.4l-6.21,4.707a1.819,1.819,0,0,1-2,0l-6.21-4.707c-.1.1-.1.2-.1.4v7.311a.9.9,0,0,0,.9.9H23.837a.473.473,0,0,1,.5.5C24.338,21.533,24.137,21.834,23.937,21.734Zm-8.213-5.609L9.815,11.618h12.62l-5.909,4.507A.606.606,0,0,1,15.724,16.125Z"
              fill="#ebebeb"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .pb {
    img {
      height: 20rem;
      border-radius: 20rem;
      margin-right: 3vw;
    }
  }
  .bio {
    width: 33rem;
    color: #f5f4f3;
    display: flex;
    flex-direction: column;
    a {
      text-decoration: underline;
    }
  }
  .sm-cta {
    width: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      svg {
        width: 1.8rem;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .about-content {
    flex-direction: column;
    .pb {
      img {
        height: 60vw;
      }
    }
    .bio {
      text-align: center;
      width: 80vw;
      align-items: center;
      .sm-cta {
        justify-content: space-between;
        width: 20vw;
        .icon {
          svg {
            width: 8vw;
          }
        }
      }
    }
  }
}
</style>
