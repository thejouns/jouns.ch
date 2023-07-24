<template>
  <div id="projects">
    <header-vue></header-vue>
    <project-vue></project-vue>
  </div>
</template>

<script>
import HeaderVue from "@/components/Header.vue";
import ProjectVue from "@/components/Projects.vue";
export default {
  title: "Meine Projekte - Jouns",
  name: "ProjectsSite",
  components: {
    HeaderVue,
    ProjectVue
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss">

</style>
