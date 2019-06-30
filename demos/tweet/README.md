---
meta:
  - name: description
    content: Displaying Tweets
  - name: keywords
    content: vuepress vue component twitter tweet
---

# Displaying Tweets

Thanks to [vue-tweet-embed](https://github.com/capaj/react-tweet-embed) you can display tweets really simply.

Install the module:

```sh
yarn add vue-tweet-embed
```

In your markdown file just add:

```js
<script>
import { Tweet } from 'vue-tweet-embed/dist'

export default {
    components: {Tweet}
}
</script>

```

<script>
import { Tweet } from 'vue-tweet-embed/dist'

export default {
    components: {Tweet}
}
</script>

Choose one of the many millions of important tweets:

```html
<Tweet id="1144887081153335296"></Tweet>
```
Hey Presto!

<Tweet id="1144887081153335296"></Tweet>
