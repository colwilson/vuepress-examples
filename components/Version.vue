<template>
  <small id='version'>
    Using vuepress version {{loc.version}}
    <span v-if="upToDate >= 0">✅</span>
    <span v-else>⚠️</span>
    , latest version is {{raw.version}}
  </small>
</template>

<script>
const axios = require("axios");
const cmp = require("semver-compare");
const loc = require("../node_modules/vuepress/package.json");
const src =
  "https://raw.githubusercontent.com/vuejs/vuepress/master/package.json";
export default {
  name: "version",
  data() {
    return {
      loc,
      raw: { version: "0" }
    };
  },
  computed: {
    upToDate() {
      return cmp(this.loc.version, this.raw.version);
    }
  },
  async beforeMount() {
    let res = await axios.get(src);
    this.$data.raw = res.data;
  }
};
</script>

<style scoped>
#version {
  color: grey;
  border-top: 2px solid grey;
}
</style>