import VueSocketio from 'vue-socket.io';
import VueNativeSock from 'vue-native-websocket'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    if (typeof process === 'undefined') { // process is undefined in a browser 
        Vue.use(VueNativeSock, 'ws://localhost:9998', { 
            reconnection: true,
            reconnectionAttempts: 5000,
            reconnectionDelay: 300
         });
        // Vue.use(VueSocketio, 'http://localhost:9999');
    }
}

