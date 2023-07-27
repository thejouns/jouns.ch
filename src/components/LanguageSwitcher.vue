<template>
  <div class="wrapper">
    <select
      class="lang-drop"
      v-model="$root.$i18n.locale"
      @change="changeLocale"
    >
      <option
        v-for="(lang, i) in $i18n.availableLocales"
        :key="`Lang${i}`"
        :value="lang"
      >
        <p>
          {{ lang }}
        </p>
      </option>
      <span class="arrow"></span>
    </select>
  </div>
</template>

<script>
export default {
  name: "locale-changer",
  data() {
    return {
      isVisable: false,
      focusedIndex: 0
    };
  },
  methods: {
    changeLocale() {
      this.$router.push({ params: { lang: this.$i18n.locale } });
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  z-index: 99;
  bottom: 0;
  width: 100%;
  height: 0;
  .lang-drop {
    border: none;
    margin: 3vw;
    outline: none;
    padding: 1rem;
    width: 8rem;
    text-transform: uppercase;
    background: transparent;
    color: #f5f4f3;
    font-size: 3rem;
    option {
      font-size: 1rem;
      
      color: #141414;
      &:hover {
        background: #ffee00;
      }
    }
  }
}
</style>
