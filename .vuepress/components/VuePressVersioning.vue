<template>
  <small id='vuepress_versioning'>
    Using vuepress version {{loc.version}}
    <span v-if="raw">
      <span v-if="upToDate >= 0">✅</span>
      <span v-else>⚠️</span>
      , latest version is {{raw.version}}
      </span>
  </small>
</template>

<script>
const axios = require("axios");
const cmp = require("semver-compare");
const loc = require("vuepress/package.json");
const src =
  "https://raw.githubusercontent.com/vuejs/vuepress/master/lern.json";
export default {
  name: "vuepress_versioning",
  data() {
    return {
      loc,
      raw: null
    };
  },
  computed: {
    upToDate() {
      return cmp(this.loc.version, this.raw.version);
    }
  },
  async beforeMount() {
    try {
      let res = await axios.get(src);
      this.$data.raw = res.data;      
    } catch (error) {
      console.err(e)
    }
  }
};
</script>

<style scoped>
#vuepress_versioning {
  color: grey;
  border-top: 2px solid grey;
}
</style>