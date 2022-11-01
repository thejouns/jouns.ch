<template>
  <div id="projects">
    <iframe
      v-for="(project, index) in projects"
      :key="index"
      :src="`${project}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "ProjectsVue",
  computed: {
    projects() {
      return this.$store.state.projects;
    }
  }
};
</script>

<style lang="scss">
#projects {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows:max-content;
  grid-gap: 2vw;
  padding: 5vw;
  iframe {
    width: 44vw;
    height: calc(40vw / 1.616161);
    border-radius: 10px;
  }
}
@media only screen and (max-width: 1024px) {
  #projects {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10vw;
    padding-bottom: 50px;
    iframe {
      width: 90vw;
      height: calc(90vw/1.7);
    }
  }
}
</style>
