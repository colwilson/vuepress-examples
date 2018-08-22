# Using Shared Blocks of Content

You can define blocks of content which can be shared on multiple pages. These are [Vue components](https://vuejs.org/v2/guide/components.html).

For example here is the _Version_ component which is also used on the Home page. 

<template>
    <div class="version">
        <Version/>
    </div>
</template>

<script>
import Version from '../../components/Version'
export default {
  components: {Version},
}
</script>

The _Version_ component's code looks like this:

```vue
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
```

You insert a component in the markdown like this:

```vue
<template>
    <div class="version">
        <Version/>
    </div>
</template>

<script>
import Version from '../../components/Version'
export default {
  components: {Version},
}
</script>

```
Vue components can be as simple as a text block that you want to reuse, or they can be much more complex. However, if they start to get really complex then perhaps it's time to just start using the [Vue Framework](https://vuejs.org) itself.

<style scoped>
.version {
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px;
}
</style>