# My Homepage

Okay, time to actually put something together. It doesn't have to be much, but it has to be decent and help me learn more about [TWCSS](https://tailwindcss.com/)

## The first (non-App) Component

As of right now, all the jsx I've done is in the main _`index.tsx`_ file. I'm going to move that out to its own file. Because I'm building my homepage and I expect to build other pages, I'll follow some of the Next.js project structure and create a `/src/pages` folder.

Inside of that, I'll create my _`home.tsx`_ file and copy in what I'm currently rendering in `<App />`:

```js
import Headshot from '../assets/headshot.jpg';

export const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <h1 className="text-slate-100">MatDupont.dev</h1>
      <h2 className="text-slate-400 bg-blue-800">Waddup, Mataverse?</h2>

      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={Headshot}
          alt="Mat's headshot"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">Mat Dupont</p>
            <p className="text-slate-500 font-medium">Senior Engineer</p>
          </div>
          <button
            type="button"
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Message
          </button>
        </div>
      </div>
    </div>
  );
};
```
