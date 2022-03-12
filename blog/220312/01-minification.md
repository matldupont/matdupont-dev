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

## Code splitting and chunking

As I mentioned earlier, I only have one page at this point. As it stands, I only have a single bundle as well. It includes all my code, but also all the necessary React and TailwindCSS. There's a balance to be struck between multiple small fetches and a single larger fetch.

That being said, I'll definitely be adding more components and pages. I won't want my entire site to exist in a single, massive bundle as the site grows, so I'll be leveraging as much code-splitting as possible.

I'm not in a position to start playing with lazy-loaded components, so I'll stick to ways I can improve my current builds.

#### Node Modules

The biggest thing I can do at this point is separate my vendor code (node*modules) from my application code but using split chunks in *`webpack.common.config.js`\_

```js
...
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
          name: "vendor", ///< name of bundle
          chunks: "all" ///< type of code to put in this bundle
        }
      }
    }
  },
...
```

I now have two bundles. One for my application code (`main.[contentHash].js`) and dependencies (`vendor.[contentHash].js`). The file sizes are now 27KB and 153KB, respectively.

![Separate main and vendor bundles](split-chunks.png)

Now... I've done an another audit and I'm sitting pretty at a score of 99 for Performance.

![99 Peformance Lighthouse score](mid-audit.png)

There's still one more thing I want to try before moving on the addressing the PWA metrics.

## Compression

The two big players in compression seem to be [gzip from GNU](https://www.gnu.org/software/gzip/) and [brotli from Google](https://github.com/google/brotli).

The former is about 3 decades old while the latter is about 9 years old. With gzip being the tried and true method of compression, I'll give that a try first.

In either case, I'll need to install the correct Webpack plugin.

```sh
yarn add -D compression-webpack-plugin
```

### gzip

For the reasons stated above, `gzip` is the default `algorithm` for the **CompressionWebpackPlugin**. Not a whole lot to do here.

_`webpack.common.config.js`_:

```js
const CompressionPlugin = require("compression-webpack-plugin");

...
plugins: [
  ...
  new CompressionPlugin()
],
...
```
