---
meta:
  - name: description
    content: Sharing Information with Native WebSockets
  - name: keywords
    content: vuepress vue component native websockets
---
# Sharing Information with Native WebSockets

[Native WebSockets](https://caniuse.com/#feat=websockets) brings websockets without the need to use extension libraries such as socket.io. WebSockets allow you to  send and broadcast information to other clients/apps via a server.

The reason you need a server is that browsers aren't allowed to access the low the level functionality that they would need to act like a server.

First, let's install some dependencies:

```bash
> npm install vue-native-websocket websocket
```

You don't need a very complicated server. Here's the simplest one I could come up with:

```js
// native.js

const WebSocketServer = require('websocket').server;
const http = require('http');

let clicks = 0

const server = http.createServer((request, response) => {
  // process HTTP request. Since we're writing just WebSockets
  // server we don't have to implement anything.
});
server.listen(9998, () => {
  console.log('listening on *:9998');
});

// create the server
let wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on('request', request => {
  let connection = request.accept(null, request.origin);
  console.log('someone connected');
  connection.on('message', msg => {
    if (msg.type === 'utf8') {
      const o = JSON.parse(msg.utf8Data)
      clicks += 1
      console.log('incrementing clicks to', clicks);
      connection.sendUTF(JSON.stringify({clicks}));
    }
  });

  connection.on('close', connection => {
  });
});
```

If you save that to __native.js__ then you can run it:

```bash
> node native
listening on *:9998
```

Now let's get vuepress to use [vue-native-websocket](https://github.com/nathantsoi/vue-native-websocket). 

Create an [enhancedApp.js file in ./vuepress](https://vuepress.vuejs.org/guide/custom-themes.html#app-level-enhancements):

```js
// enhancedApp.js

import VueNativeSock from 'vue-native-websocket'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    if (typeof process === 'undefined') { // process is undefined in a browser 
        Vue.use(VueNativeSock, 'ws://localhost:9998', { 
            format: 'json',
            reconnection: true,
            reconnectionAttempts: 5000,
            reconnectionDelay: 300
         });
    }
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
  methods: {
    clickButton() {
      this.$socket.sendObj({text: 'someone clicked a button'})
    }
  },
  beforeMount() {
    this.$options.sockets.onmessage = (msg) => {
      let o = JSON.parse(msg.data)
      this.clicks = o.clicks
      console.log('click count', this.clicks)
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
  methods: {
    clickButton() {
      this.$socket.sendObj({text: 'someone clicked a button'})
    }
  },
  beforeMount() {
    this.$options.sockets.onmessage = (msg) => {
      let o = JSON.parse(msg.data)
      this.clicks = o.clicks
      console.log('click count', this.clicks)
    }
  }
}
</script>

If you [clone this repo](https://github.com/colwilson/vuepress-examples) the _native.js_ is actually in the root path. Follow these instructios to try it out. 

In a console:
```sh
# to start the websockets backend server
node native
```
and in another console:

```sh
# to start the development server
npm start
```

[Open a browser window](http://localhost:8080/demos/native/) and click the button.

Try opening [another window](http://localhost:8080/demos/native/) and watch them both update when you click the button!

::: tip
Note that this app won't work on the hosted website as I don't have the backend server _native.js_ running. You will have to download the repo and try it on your own machine as per the ionstructions above.
:::