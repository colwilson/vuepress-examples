---
meta:
  - name: description
    content: Using Shared Blocks of Content
  - name: keywords
    content: vuepress vue component templates blocks partials insert
---
# Using Shared Blocks of Content

You can define blocks of content which can be shared on multiple pages. These are [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html). Which you should put in the directory `.vuepress/components`.

For example here is the _VuePressVersioning_ component which is also used on the Home page. 

<div class="highlighted">
    <VuePressVersioning/>
</div>


The _VuePressVersioning_ component's code looks like this:

<<< @/.vuepress/components/VuePressVersioning.vue

You insert a component in the markdown like this (the surrounding `div` is just for styling purposes):

```vue
<div class="highlighted">
    <VuePressVersioning/>
</div>
```
Vue components can be as simple as a text block that you want to reuse, or they can be much more complex. However, if they start to get really complex then perhaps it's time to just start using the [Vue Framework](https://vuejs.org) itself.

<style scoped>
.highlighted {
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 1px;
}
</style>
