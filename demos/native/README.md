# Sharing Information with Native WebSockets

[Socket.io](https://socket.io/) is an implementation of websockets which you can use to send and broadcast information to other servers via a server.

The reason you need a server is that browsers aren't allowed to access low level functionality that they would need to run.

First, let's install some dependencies:

```bash
> npm install vue-native-websocket
```

You don't need a very complicated server. Here's the simplest one I could come up with:

```js
// native.js

xxxxxxxxxxxxxxxxxxxxxxxxxx
```

If you save that to __socket.js__ then you can run it:

```bash
> node native
listening on *:9998
```

Now let's get vuepress to use vue-socket.io. Create an [enhancedApp.js file in ./vuepress](https://vuepress.vuejs.org/guide/custom-themes.html#app-level-enhancements):

```js
// enhancedApp.js

xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Next, create a simple README.md file that looks like this:

```js
xxxxxxxxxxxxxxxxxxxxxxxxxxx
```

When it renders it should look like this:

<div>
  <button v-on:click="clickButton()">Click Me!</button>
  <span>Clicks: {{clicks}}</span>
</div>

<script>
export default {
  data () {
      return {
        clicks: 0
      }
  },
  sockets:{
    connect() {
      console.log('socket connected')
    },
    clicks(msg) {
      console.log('received:', msg)
      this.clicks = msg.count
      console.log('click count', this.clicks)
    }
  },
  methods: {
    clickButton() {
      this.$socket.send('clicks', 'someone clicked a button');
    }
  },
  beforeMount() {
    this.$options.sockets.onmessage = (msg) => {
      console.log('received:', msg)
      this.clicks = msg.data
      console.log('click count', this.clicks)
    }
  }
}
</script>

If you [clone this repo](https://github.com/colwilson/vuepress-examples) the __server.js__ is actually in the root path. If you start it up and run this app you can test it out. Try opening another browser at the same url as this page and they will both update when you click the button!

