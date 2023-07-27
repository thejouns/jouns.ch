<template>
  <div id="projects">
    <project-vue></project-vue>
  </div>
</template>

<script>
import ProjectVue from "@/components/Projects.vue";
export default {
  title: "Jouns - Projekte",
  name: "ProjectsSite",
  components: {
    ProjectVue,
  },
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
};
</script>

<style lang="scss"></style>
