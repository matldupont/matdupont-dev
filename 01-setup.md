# The initial setup

Here's what I'm thinking, and why:

I know React really well. I also want to learn Vue and Svelte... but I have zero interest in learning Angular. So, I'll be using React as the main container for the site.

Ideally, I'll be learning the other two (and maybe others down the road) and will be able to use this site as a playground to learn and practice with the other frameworks.

How?! Microfrontends!

In theory, I should be able to use any framework that uses Webpack 5 and [Module Federation](https://webpack.js.org/plugins/module-federation-plugin/) to build components/applications and stitch them all together on this site. I'm not actually sure Svelte uses webpack because I haven't tried it at all yet, but I've played with Vue from the perspective of a microfrontend and know that should work.

With that, I'll be doing this initial setup with React and Webpack 5. I've been messing around with Webpack and Typescript lately, so I'll keep up with that practice and configure things from scratch as much as possible. I'll be avoiding CRA for that reason.

What else?

ESlint, naturally. Prettier, of course!

Babel? ... maybe not. Dealing with some slow build times on another project, I found that swapping out babel for esbuild-loader (and esbuild-jest) sped things up drastically. I think I'll go that route, at least until I hit a wall. 🤞

I would consider using esbuild rather than webpack, but I have not experience with module federation with esbuild and have no idea if that's a thing yet. One thing at a time.

Deployment? 🤷 Future Mat's problem.

## Okay, let's do this!
