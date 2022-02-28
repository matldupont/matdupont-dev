# Audit improvements

## Accessibility

I only seem to have one glaring a11y issue, so I'll knock that one out right away.

```
<html> element does not have a [lang] attribute
```

The problem here is that I'm not telling the browser that my copy is in English. This leaves a screen reader to try going through my site in whatever language is set in a user's screen reader.

I'm not sure if or when I'll tackle an internationalization (i18n) for the site, but for now it's a matter of setting this in my _`/src/index.html`_

```html
<html lang="en" class="h-full bg-red-300 dark:bg-red-900"></html>
```

I can test this change by running another audit from my dev server. I'm not currently concerned with the Performance score, so I don't have to go through the trouble of redeploying with every change just yet.

Sweet.

![100% Accessibility Audit](a11y-100.png)

I'll reiterate that this doesn't necessarily mean my site is completely accessible to all users. I just don't have any super obvious issues.

## Best Practices

Next up, what's the favicon crap?!

Welp, I don't have a logo nor the skills to design and create one in a pinch. Might as well use my headshot! It'll be tiny, but it'll be something. Besides, it'll be on only page anyway. People will be able to put 2 and 2 together, right? 🤞

So, the massive _`headshot.jpg`_ is my source. I'll head over to [favicon.io](https://favicon.io/favicon-converter/) to generate my favicon.

As expected, I can't just convert this source file. I have to convert to an intermediate png first.

[cloudconvert](https://cloudconvert.com/jpg-to-png) has my back!

So, I first create a _`headshot.png`_ from my _`headshot.jpg`_ file. Might as well add that to my `/src/assets` folder for safe keeping.

Next, I create the _`favicon.ico`_ from _`headshot.png`_

This great! favicon.io didn't just create the one file, but all the variants I'll likely need. This should come in handy when I get to my PWA. 🤘

![Favicon Download Directory](icon-directory.png)

I'm going to dump all the contents into a new `/src/assets/favicon/` directory.

Since I'm using Webpack to bundle all my code create the index.html for the site, this is where I can set the favicon. All I have to do is add to the `HtmlWebpackPlugin` configuration.

_`webpack.common.config.js`_:

```js
...
plugins: [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    favicon: 'src/assets/favicon/favicon.ico',
  }),
  ...
]
...
```

This time, I do want to redeploy and see how this change fares in the wild.

New tab, who dis?

![Chrome tab is favicon](chrome-tab.png)

Maybe I'll make it circular down the road. This is cool, though.

Time for another audit!

![100% Best Practices Audit](best-practices-100.png)

**Alright!**

## SEO

As explained in the [previous post](https://github.com/matldupont/matdupont-dev/blob/main/blog/220227/01-lighthouse.md), most of my SEO issues step from a lack of mobile-specific configuration.

I mean... it's not mobile friendly at all.

![Site on mobile looks horrible](mobile-before.png)

The audit is helpful enough in explaining what's missing.

![Missing meta viewport details](meta-viewport.png)

So, I'll head over _`/src/index.html`_ and add to the `<head>` tag.

```html
...
<head>
  <meta charset="utf-8" />
  <title>MatDupont.dev</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
...
```

This tells the browser to fit the content to the device's width with no change to the scale.

**GOOD GOD!** That's ugly!

![Mobile friendly but ugly site](mobile-after.png)

But... it's working.

The remaining mobile-specific issues had to do with the tiny font size based on the viewport width. Fixing the viewport actually fixed those issues as well.

![SEO description issue](seo-description.png)

I'll add another `<meta>` tag for this in the `<head>`:

```html
...
<head>
  <meta charset="utf-8" />
  <title>MatDupont.dev</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="MatDupont.dev homepage. Welcome to my Playground. I hope it's even a little helpful."
  />
</head>
...
```
