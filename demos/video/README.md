---
meta:
  - name: description
    content: Displaying Videos in Any Browser
  - name: keywords
    content: vuepress vue component videos video vimeo youtube
---

# Displaying Videos

Displaying a video might be just as simple as adding this to your `README.md`

```html
<video width="560" height="240" controls>
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 
```
<video width="560" controls>
  <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

This will work on [most modern browsers](https://en.wikipedia.org/wiki/HTML5_video) nowadays which is great.

However there's no way to embed a [vimeo](https://vimeo.com) or [youtube](https://www.youtube.com) video using the `video` tag that I know of.

Using vimeo or youtube `iframe` embeds works fine of course - here's a youtube example:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/bTqVqk7FSmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/bTqVqk7FSmY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

And here's a vimeo example:

```html
<iframe src="https://player.vimeo.com/video/143418951" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/143418951">&quot;View From A Blue Moon&quot; Trailer</a> from <a href="https://vimeo.com/johnjohnflorence">John John Florence</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
```

<iframe src="https://player.vimeo.com/video/143418951" width="560" height="315" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/143418951">&quot;View From A Blue Moon&quot; Trailer</a> from <a href="https://vimeo.com/johnjohnflorence">John John Florence</a> on <a href="https://vimeo.com">Vimeo</a>.</p>

However, that gives you all their branding and ads and so on and limits your ability to syle what you see.
