// import VueNativeSock from 'vue-native-websocket'
import VueSocketio from 'vue-socket.io';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // Vue.use(VueNativeSock, 'ws://localhost:9999', {
    //     reconnection: true, // (Boolean) whether to reconnect automatically (false)
    //     reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
    //     reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
    // })
    Vue.use(VueSocketio, 'http://localhost:9999');

}

