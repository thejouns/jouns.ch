<template>
  <div id="projects">
    <div class="project-grid">
      <a
        v-for="(project, index) in projects.slice(6 - projects.length - 6)"
        :key="index"
        class="project-container"
        :href="`${projects.video}`"
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
              <td v-html="roll.name">{{ roll.name }}</td>
            </tr>
          </table>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  title: "Meine Projekte - Jouns",
  name: "ProjectsVue",
  components: {},
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
    margin-top: 6vh;
    padding: 0px;
    .project-container {
      grid-column: minmax(1, 3);
      display: flex;
      flex-direction: row;
      background: #f5f4f3;
      justify-content: space-between;
      width: 100%;
      height: calc(50vw / 1.77);
      text-decoration: none;
      overflow: hidden;
      &:nth-child(2n + 2) {
        background-color: #eeeeee;
      }
      &:hover {
        .project-img {
          filter: saturate(1);
        }
      }
    }
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }
    .project-img {
      width: 66%;
      height: 100%;
      background-size: cover;
      background-position: center;
      filter: saturate(0);
      transition: 0.3s;
    }
    .proj-text {
      height: 100%;
      width: 33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 4vw;
      h1 {
        color: #141414;
        text-transform: uppercase;
        font-size: 2.5vw;
      }
      table {
        width: 90%;
        font-size: 1rem;
        color: #141414;
        .roll-title{
            width: 11rem;
        }
        tr {
          vertical-align: top;
        }
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  #projects {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10vw;
    padding-bottom: 50px;
    iframe {
      width: 90vw;
      height: calc(90vw / 1.7);
    }
  }
}
</style>
