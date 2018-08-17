import VueSocketio from 'vue-socket.io';

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(VueSocketio, 'http://localhost:9999');
}

