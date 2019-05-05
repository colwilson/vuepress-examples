const version = require("./../package.json").version;

module.exports = {
  title: `VuePress Examples ${version}`,
  description: "Examples of useful vuepress code",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  plugins: [
  ],
  themeConfig: {
    lastUpdated: false,
    sidebar: [
      ["/", "Home"],
      "/demos/plugins/",
      "/demos/local/",
      "/demos/remote/",
      "/demos/remote-async/",
      "/demos/native/",
      "/demos/socket-io/",
      ["/demos/homepage/", "A Homepage Fit for Heroes"],
      "/demos/netlify/",
      "/demos/partials/",
      "/demos/diagrams/",
      "/demos/video/",
      "/demos/extending/",
    ],
    nav: [
      { text: "Home", link: "/" }
    ],
    repo: "colwilson/vuepress-examples",
    repoLabel: "Contribute an Example !",
    displayAllHeaders: true
  },
  extendMarkdown(md) {
    lineNumbers: true
  },
  configureWebpack: {
    // module: {
    //   rules: [
    //     { test: /\.md$/, use: './loader' }
    //   ]
    // }
  }
};
