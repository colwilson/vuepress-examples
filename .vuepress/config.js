module.exports = {
  title: "VuePress Examples",
  description: "no need for a description really",
  ga: "UA-20931749-8",
  themeConfig: {
    lastUpdated: false,
    sidebar: [
      ["/", "Home"],
      "/demos/local/",
      "/demos/remote/",
      "/demos/remote-async/",
      ["/demos/homepage/", "A Home Fit for Heroes"],
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
  // configureWebpack: {
  //   module: {
  //     rules: [
  //       { test: /\.md$/, use: './loader' }
  //     ]
  //   }
  // }
};
