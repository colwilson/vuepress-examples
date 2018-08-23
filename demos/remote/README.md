---
meta:
  - name: description
    content: Rendering Remote API Data
  - name: keywords
    content: vuepress vue component remote api json data synchronous synchronously
---
# Rendering Remote API Data

Use axios to grab a remote API and a callback to render it's contents.
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

