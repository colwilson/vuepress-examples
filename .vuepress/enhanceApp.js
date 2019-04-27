import VueSocketio from 'vue-socket.io';
import VueNativeSock from 'vue-native-websocket'
import VueTypedJs from 'vue-typed-js'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    if (typeof process === 'undefined') { // process is undefined in a browser         

        // // disabled since there is no server running on the live site
        // Vue.use(VueNativeSock, 'ws://localhost:9998', { 
        //     format: 'json',
        //     reconnection: true,
        //     reconnectionAttempts: 5,
        //     reconnectionDelay: 3000
        //  });

        // // disabled since there is no server running on the live site
        // Vue.use(VueSocketio, 'http://localhost:9999');

        Vue.use(VueTypedJs)
    }
}

