---
meta:
  - name: description
    content: Rendering Remote API Data (async)
  - name: keywords
    content: vuepress vue component remote api json data asynchronous asynchronously
---
# Rendering Remote API Data (async)

Use axios async to grab a remote API and render it's contents.
```js
<div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2>
    <img :src="i.avatar"/>
</div>

<script>
const axios = require('axios')
export default {
  data () {
      return {
          items: []
      }
  },
  async beforeMount() {
    this.$data.items = await axios.get('https://reqres.in/api/users')
  }
}
</script>

```
<div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2>
    <img :src="i.avatar"/>
</div>

<script>
const axios = require('axios')
export default {
  data () {
      return {
          items: []
      }
  },
  beforeMount() {
    axios.get('https://reqres.in/api/users')
    .then(response => {
       this.$data.items = response.data.data
    })
    .catch(error => {
        console.log(error);
    })
  }
}
</script>

