# Using Vue Plugins

<vue-typed-js :strings="items">
  <p>My favourite city is <span class="typing"></span></p>
</vue-typed-js>

Since Vuepress is built on Vue.js there are already a load of plugins you can use. You just need to make sure they are _registered_ in `.vuepress/enhanceApp.js`.

Here's a simple example of how you would register the [vue-typed-js](https://github.com/Orlandster1998/vue-typed-js) plugin:

```js
// .vuepress/enhanceApp.js
import VueTypedJs from 'vue-typed-js'

export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    if (typeof process === 'undefined') { // process is undefined in a browser         
        Vue.use(VueTypedJs)
    }
}
```

Here's the code showing how it is used in this page. Note that you don't need to import anything, you don't need to use any convoluted markdown, you just use it like the demos shown on the [vue-typed-js](https://github.com/Orlandster1998/vue-typed-js) readme.

```js
<vue-typed-js :strings="items">
  <p>My favourite city is <span class="typing"></span></p>
</vue-typed-js>

<script>
export default {
  data () {
      return {
          items: [
            'Ealing',
            'Kilmarnock',
            'Newport',
            'Kensington',
            '...', 
            'Dagenham',
            'Liverpool',
            'Saint Helens',
            'Knowsley'
          ]
      }
  },
}
</script>
```

<script>
export default {
  data () {
      return {
          items: [
            'Ealing',
            'Kilmarnock',
            'Newport',
            'Kensington',
            'Hwlffordd',
            'Uxbridge',
            'Twickenham',
            'Plymouth',
            'Livingston',
            'Portsmouth',
            'Paisley',
            'Exeter',
            'Widnes',
            'Stretford',
            'Stornoway',
            'Manchester',
            'Inverness',
            'Morden',
            'London',
            'Ilford',
            'Poplar',
            'Salford',
            'Derby',
            'Mold',
            'Worcester',
            'Rochester',
            'Chichester',
            'East Ham',
            'Oakham',
            'Gloucester',
            'Wrecsam',
            'Wolverhampton',
            'Llangefni',
            'Hove',
            'Brighton',
            'Doncaster',
            'Shrewsbury',
            'Glasgow',
            'Camden Town',
            'Cardiff',
            'Bexleyheath',
            'Dover',
            'Bury',
            'Greenock',
            'Middlesbrough',
            'Scarborough',
            'Merthyr Tudful',
            'Taunton',
            'York',
            'Port Talbot',
            'Dagenham',
            'Liverpool',
            'Saint Helens',
            'Knowsley'
            ]
      }
  },
}
</script>