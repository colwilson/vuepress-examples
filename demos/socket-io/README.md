# Sharing Information with Socket.io

[Socket.io](https://socket.io/) is an implementation of websockets which you can use to send and broadcast information to other servers via a server.

The reason you need a server is that browsers aren't allowed to access low level functionality that they would need to run.

First, let's install some dependencies:

```sh
> npm i express socket.io vue-socket.io
```

You don't need a very complicated server. Here's the simplest one I could come up with:

```js
// server.js

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

let clicks = 0

io.on('connection', socket => {
  console.log('someone connected');
  io.emit('clicks', { count: clicks });
  socket.on('button_clicked', msg => {
    console.log('message:', msg);
    clicks += 1
    console.log('incrementing clicks to', clicks);
    io.emit('clicks', { count: clicks });
  })
});

http.listen(9999, () => {
  console.log('listening on *:9999');
});
```

If you save that to __server.js__ then you can run it:

```sh
> node server
listening on *:9999
```

Now let's get vuepress to use vue-socket.io. Create an [enhancedApp.js file in ./vuepress](https://vuepress.vuejs.org/guide/custom-themes.html#app-level-enhancements):

```js
// enhancedApp.js

import VueSocketio from 'vue-socket.io';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(VueSocketio, 'http://localhost:9999');
}
```

Next, create a simple README.md file that looks like this:

```js
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
        this.$socket.emit('button_clicked', 'someone clicked a button');
    }
  }
}
</script>
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
        this.$socket.emit('button_clicked', 'someone clicked a button');
    }
  }
}
</script>

If you [clone this repo](https://github.com/colwilson/vuepress-examples) the __server.js__ is actually in the root path. If you start it up and run this app you can test it out. Try opening another browser at the same url as this page and they will both update when you click the button!

