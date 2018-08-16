module.exports = {
  title: "VuePress Examples",
  description: "no need for a description really",
  themeConfig: {
    lastUpdated: false,
    sidebar: [
      ["/", "Home"],
      "/demos/local/",
      "/demos/remote/",
      ["/demos/homepage/", "Home for Heros"],
      // "/demos/myself/"
    ],
    nav: [
      { text: "Home", link: "/" }
      //   { text: 'Demos', link: '/demos/' }
    ],
    repo: "colwilson/vuepress-examples",
    repoLabel: "Contribute an Example !",
    displayAllHeaders: true
  },
  markdown: {
    lineNumbers: true
  },
  configureWebpack: {
    module: {
      rules: [
        { test: /\.md$/, use: './loader' }
      ]
    }
  }
};
