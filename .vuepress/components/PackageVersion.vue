<template>
<div class="PackageVersion">{{version}}</div>
</template>

<script>
const version = require("./../../package.json").version;
export default {
  name: "PackageVersion",
  data() {
    return { version };
  }
};
</script>

<style scoped>
</style>