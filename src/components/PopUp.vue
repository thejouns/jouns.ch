<template>
  <div class="project-popup">
    <a @click="goBack()">X</a>
    <div
      class="project-wrapper"
      v-for="(project, index) in activeProjects"
      :key="index"
      :style="{ backgroundImage: `url(&quot;${project.image}&quot;)` }"
    ><div class="proj-content">
    <h1>{{project.title}}</h1>
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
  </div></div>
  <projects-site></projects-site>
  </div>
</template>

<script>
import ProjectsSite from '../views/ProjectsSite.vue';
export default {
 props: [
  'TogglePopup'
 ],
 methods: {
  goBack(){
    this.$router.go(-1)
  }
 },
 computed: {
    projects() {
      return this.$store.state.projects;
    },
    activeProjects: function () {
      return this.$store.state.projects.filter((project) => {
        return project.path.match(this.$route.params.projName);
      });
    },
  },
}
</script>

<style lang="scss">
.project-popup{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .project-wrapper{
    width: 100vw;
    height: 90vh;
    margin-top: 10vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    .proj-content{
      width: 80vw;
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
    }
  }
}

</style>