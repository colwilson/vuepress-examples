# Sharing Information with Socket.io

[Socket.io](https://socket.io/) is an implementation of websockets which allow you to send and broadcast information to other clients/apps via a server.

The reason you need a server is that browsers aren't allowed to access the low the level functionality that they would need to act like a server.

First, let's install some dependencies:

```bash
> npm i express socket.io vue-socket.io
```

You don't need a very complicated server. Here's the simplest one I could come up with:

```js
// socket.js

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

If you save that to __socket.js__ then you can run it:

```bash
> node socket
listening on *:9999
```

Now let's get vuepress to use vue-socket.io. 

Create an [enhancedApp.js file in ./vuepress](https://vuepress.vuejs.org/guide/custom-themes.html#app-level-enhancements):

```js
// enhancedApp.js

import VueSocketio from 'vue-socket.io';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    if (typeof process === 'undefined') { 
        // process is undefined in a browser 
        Vue.use(VueSocketio, 'http://localhost:9999');
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

If you [clone this repo](https://github.com/colwilson/vuepress-examples) the _socket.js_ is actually in the root path. Follow these instructios to try it out. 

In a console:
```sh
# to start the websockets backend server
node socket
```
and in another console:

```sh
# to start the development server
npm start
```

[Open a browser window](http://localhost:8080/demos/socket-io/) and click the button.

Try opening [another window](http://localhost:8080/demos/socket-io/) and watch them both update when you click the button!

::: tip
Note that this app won't work on the hosted website as I don't have the backend server _socket.js_ running. You will have to download the repo and try it on your own machine as per the ionstructions above.
:::