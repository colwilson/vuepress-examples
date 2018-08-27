---
meta:
  - name: description
    content: Rendering Local JSON Data 
  - name: keywords
    content: vuepress vue component local data json
---
# Rendering Local JSON Data

Use import to grab local json data and render it's contents.

```js
<div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2>
    <img :src="i.avatar"/>
</div>

<script>
import data from './data.json'
export default {
  data () {
      return {
          items: data.data
      }
  }
}
</script>
```

<div v-for="i in items">
    <h2>{{i.first_name}} {{i.last_name}}</h2>
    <img :src="i.avatar"/>
</div>

<script>
import data from './data.json'
export default {
  data () {
      return {
          items: data.data
      }
  }
}
</script>

