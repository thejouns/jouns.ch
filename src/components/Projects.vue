<template>
  <div id="projects">
    <div class="project-grid">
      <div
        v-for="(project, index) in projects.slice(6 - projects.length - 6)"
        :key="index"
        class="project-container"
        onclick=""
      >
        <div
          class="project-img"
          :style="{ backgroundImage: `url(&quot;${project.image}&quot;)` }"
        ></div>
        <div class="proj-text">
          <h1>{{ project.title }}</h1>
          <table class="rolls">
            <tr
              class="roll"
              v-for="(roll, index) in project.rolls"
              :key="index"
            >
              <td class="roll-title">
                <b>{{ roll.title }}</b>
              </td>
              <td v-html="roll.name"></td>
            </tr>
          </table>
          <a
            class="watchButton"
            target="_blank"
            :key="index"
            :href="project.video"
          >
            <svg
              id="Ebene_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1073.75 1073.75"
            >
              <path
                d="m536.88,0C240.37,0,0,240.37,0,536.88s240.37,536.88,536.88,536.88,536.88-240.37,536.88-536.88S833.39,0,536.88,0Zm241.79,543.05l-384.08,221.75c-4.76,2.75-10.7-.69-10.7-6.18v-443.5c0-5.49,5.94-8.92,10.7-6.18l384.08,221.75c4.76,2.75,4.76,9.61,0,12.36Z"
                style="fill: #ffee00"
              />
            </svg>
            Projekt Anschauen</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import PopUp from "./PopUp.vue";
export default {
  title: "Jouns - Projekte",
  name: "ProjectsVue",
  setup() {
    const popupTrigger = ref({
      buttonTrigger: false,
    });
    const togglePopup = (trigger) => {
      popupTrigger.value[trigger] = !popupTrigger.value[trigger];
    };
    return {
      PopUp,
      popupTrigger,
      togglePopup,
    };
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss">
#projects {
  .project-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: max-content;
    margin-top: 8vh;
    padding: 0px;
    .project-container {
      grid-column: minmax(1, 3);
      display: flex;
      flex-direction: row;
      background: transparent;
      justify-content: space-between;
      width: 100%;
      height: calc(50vw / 1.77);
      text-decoration: none;
      overflow: hidden;
      /* &:nth-child(2n + 2) {
        background-color: #eeeeee;
      }*/
      &:focus-visible {
        outline: solid 1px;
      }
      &:hover,
      &:active {
        .project-img {
          filter: saturate(1);
          scale: 1.005;
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
    .project-img {
      width: 100%;
      height: calc(50vw / 1.5);
      background-size: cover;
      background-position: center;
      filter: saturate(0);
      transition: 0.3s;
    }
    .proj-text {
      height: calc(50vw / 1.77);
      width: 50%;
      display: flex;
      position: absolute;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      padding-left: 4vw;
      background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.5),
        transparent
      );
      h1 {
        color: #f5f4f3;
        text-transform: uppercase;
        font-size: 2.5vw;
      }
      table {
        width: 90%;
        font-size: 1rem;
        color: #f5f4f3;
        .roll-title {
          width: 11rem;
        }
        tr {
          vertical-align: top;
        }
      }
      .watchButton {
        font-weight: 500;
        padding-top: 3rem;
        svg {
          width: 1rem;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  #projects {
    .project-grid {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 0;
      .project-container {
        height: calc(100vw / 1.77);
        .project-img {
          height: calc(100vw / 1.77);
        }
        .proj-text {
          height: calc(100vw / 1.77);
          width: 80vw;
          h1 {
            font-size: 7vw;
          }
          table {
            display: none;
          }
          .watchButton {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
