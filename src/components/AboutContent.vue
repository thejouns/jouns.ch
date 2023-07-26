<template>

  <div class="about-content">

    <div class="pb"><img src="@/assets/img/pb.jpg" alt="" /></div>

    <div class="bio">

      <h3>JOUNS</h3>

      <p>
         Jonas Kunz, a.k.a. Jouns, is an up-and-coming director and director of photography
        (DP) based in Bern. He picked up his first camera at an early age to film
        and photograph everything that caught his eye. In 2020, Jonas founded the
        "Ocular Collective" (
        <a target="_blank" href="https://ocular.ch">ocular.ch</a>
        ) together with the like-minded Andrin Schranz and Cedric Ribi.
        Since then, Jonas has already produced numerous music videos,
        documentaries, and other types of short films.
      </p>

      <div class="sm-cta">

        <a class="icon" href="https://instagram.com/joouuns" target="_blank">

          <svg
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
           @joouuns
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
    p {
      margin-top: 0px;
    }
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      svg {
        height: 1.8rem;
        padding-right: 0.3rem;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .about-content {
    padding-top: 12vh;
    height: 88vh;
    flex-direction: column;
    .pb {
      img {
        height: 45vw;
      }
    }
    .bio {
      text-align: center;
      width: 80vw;
      align-items: center;
      .sm-cta {
        justify-content: center;
        .icon {
          text-decoration: underline;
          svg {
            width: 8vw;
            padding: 0px;
          }
        }
      }
    }
  }
}
</style>

