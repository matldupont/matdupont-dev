# Code Minification

Now that I have my caching in order as well as image optimization, it's time to get back to the code. The remaining recommendations I'm getting from Lighthouse are in regards to the size of my bundles.

Considering I only have one page with no extra bundle dependencies aside from `react`, `react-dom` and `react-helmet-async`, there's no way I should be blowing whatever budget I'm afforded under the Lighthouse limits.

But who knows?! Let's see what can be done here.

## ESBuildMinifyPlugin

There are a few different options for code minification like Terser, Babel, Uglify, etc... but since I'm already using `esbuild-loader`, I'd like to see if there's anything in that toolbox I can reach for.

Looking back at the [documentation](https://github.com/privatenumber/esbuild-loader#js-minification-eg-terser), it looks like I'm in luck.

**Bonus**, I don't even need to install a separate plugin. `ESBuildMinifyPlugin` is included in the `esbuild-loader` package.

```js
const { ESBuildMinifyPlugin } = require('esbuild-loader')
...

optimization: {
  minimizer: [
    ...
    new ESBuildMinifyPlugin(),
  ],
}
...
```

I currently have just the one bundle file, which is something I'll address next, but I'll check its size to see the effect of minification.

**Before minification**

![238KB before minification](before-min.png)

**After minification**

![181KB after minification](after-min.png)

Down ~24%! I like that.

This _may_ help my score, but there's more I can do here.
