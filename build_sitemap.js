const sm = require('sitemap')
const fs = require('fs')
const package = require('./.vuepress/config')

const hostname = 'https://vuepress-examples.netlify.com/'
let urls = []

for (const obj of package.themeConfig.sidebar) {
  let url
  let changefreq = 'monthly'
  let priority = 0.5
  if (typeof obj === typeof []) {
    url = obj[0]
  } else {
    url = obj
  }
  urls.push({ url, changefreq, priority })
}


const sitemap = sm.createSitemap({ hostname, urls });
const xml = sitemap.toXML()

fs.writeFile('./.vuepress/sitemap.xml', xml, err => {
  if (err) throw (err)
  console.log("The file was saved!");
}); 