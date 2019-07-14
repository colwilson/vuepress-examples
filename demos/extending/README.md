---
meta:
  - name: description
    content: Modifying the Default Theme
  - name: keywords
    content: vuepress vue extend theme modify monetize adsense
---
# Modifying the Default Theme

In version 0.x of vuepress you had to eject the whole theme and make modifications to the dumped vue, js and css. That is all very well, but as the maintainers themselves were keen to make clear, that meant that you then became the maintainer - if you broke it you owned it. 

In v1 you only need to modfy the components you want to change and you can leave the rest alone.

## An example

Let's say you want to add some banner text to your site.

First of all you need to tell vuepress that you are using some local theming by creating a file in `.vuepress/theme/index.js`


```js
// .vuepress/theme/index.js

module.exports = {
  extend: '@vuepress/theme-default'
}

```

In a nutshell, this replicates having every vue file from the default theme in the `.vuepress/themes` directory without actually having to have them physically there. 

::: tip
Gotcha alert! this does not mean that it replicates all the js and css files too though. If you add a vue file that references e.g. css files, the css files has to exist in the directory. 
:::

## What's in the Default Theme?

Let's have a look at what files are included in the default theme. We'll eject them into a directory called `_tmp` so that we can take a peek. We can delete it again after we are done.

```sh
vuepress eject _tmp
```

An explanation of the directory structure is [here](https://v1.vuepress.vuejs.org/theme/writing-a-theme.html#directory-structure).

So lets say we want to add some text above the content of every Page (the normal page view). To do that we need copy the file from `_tmp/components/Page.vue` to `.vuepress/theme/components/Page.vue`. 

Looking inside `.vuepress/theme/components/Page.vue` you will notice that it also pulls in two external files at:

```js
// line 65
import Advert from "@theme/components/Advert.vue";

```
and 
```js
// line 196
@require '../styles/wrapper.styl'

```

You need to copy those over as well or things will fail!

## Let's Make Some Changes

Now run `vuepress dev` and you will see your site as normal. Hoever in this instance you are using a local copy of Page.vue and we can edit it.

The top of Page.vue looks like this:

```js
// .vuepress/theme/components/Page.vue
<template>
  <main class="page">
    <slot name="top"/>

    <Content/>
```

Change it to look like this:

```js
// .vuepress/theme/components/Page.vue
<template>
  <main class="page">
    <slot name="top"/>

    <div class="content">
      <p style="background-color: #ffffbb; text-align: center; padding: 0.5rem;">
        Hello!
      </p>
    </div>

    <Content/>
```

I'm no stylist, but you get the idea. 

Have fun.
