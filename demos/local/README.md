# Rendering Local JSON Data

Use import to grab local json data and render it's contents.
## Demo Code
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
## Demo

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

