---
meta:
  - name: description
    content: Adding Technical Diagrams with Mermaid
  - name: keywords
    content: vuepress vue component mermaid diagrams
---
# Adding Technical Diagrams with Mermaid

[Mermaid](https://mermaidjs.github.io/) allows you to add technical diagrams to your markdown and is a great ally if you are writing technical documents in vuepress:

<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>

First you need to install mermaid:
```sh
npm install mermaid --save
```
and create a component in _.vuepress/components_

```js
// .vuepress/components/mermaid.vue

<template>
  <div class="mermaid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  beforeMount() {
    import("mermaid/dist/mermaid").then(m => {
      m.initialize({
        startOnLoad: true
      });
      m.init();
    });
  }
};
</script>
```
Then you can add mermaid blocks right into your mardown:

```html
<mermaid>
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
</mermaid>
```
Thanks to [neumayer's example code here](https://github.com/vuejs/vuepress/issues/111#event-1797373924). And as he says there, if you need to add blank lines then you need to add a `&nbsp;` to the end of the blank line or vuepress will break.

