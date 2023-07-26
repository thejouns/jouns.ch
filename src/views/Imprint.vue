<template>
  <div class="imprint">
    <h1>Impressum</h1>
    <div
      class="imp-section"
      v-for="(section, index) in imprint"
      :key="index"
      v-scroll-reveal
    >
      <h2>{{ section.title }}</h2>
      <p v-html="section.content"></p>
      <div
        class="sub-imp-section"
        v-for="(sub, index) in section.subSections"
        :key="index"
        :id="sub.title"
      >
        <h3>{{ sub.title }}</h3>
        <p v-html="sub.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imprint() {
      return this.$store.state.imprint;
    },
    subSection() {
      return this.imprint.subSection;
    }
  }
};
</script>

<style lang="scss">
.imprint {
  color: #f5f4f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 12vh;
  .imp-section {
    width: 60vw;
    padding: 0vw 10vw 2vw 10vw;
  }
}
</style>
