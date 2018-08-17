# Rendering Local JSON Data

Use import to grab local json data and render it's contents.

```js
<button v-on:click="clickButton()">Send</button>
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
  },

}
</script>
```

<div v-for="i in items">
    <button v-on:click="clickButton()">Send</button>
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
  },
  created() {
    this.$options.sockets.onmessage = (data) => console.log(data)
  },
  sockets:{
    connect() {
      console.log('socket connected')
    },
    messages(msg) {
      console.log('received:', msg)
    }
  },
  methods: {
    clickButton() {
        this.$socket.emit('button_clicked', 'someone clicked a button');
    }
  }
}
</script>

