import { Helmet } from 'react-helmet-async';
import Headshot400 from '../assets/headshot-400w.jpeg';
import Headshot600 from '../assets/headshot-600w.jpeg';

export function HomePage() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MatDupont.dev | Home</title>
        <meta
          name="description"
          content="MatDupont.dev homepage. Welcome to my Playground. I hope it's even a little helpful."
        />
      </Helmet>

      <div className="mx-auto flex min-h-screen max-w-screen-xl items-center justify-center">
        <div className="mx-2 flex max-w-xl flex-col items-center rounded-xl border border-neutral-200/25 bg-white bg-opacity-70 px-8 py-4 shadow-lg backdrop-blur-sm backdrop-brightness-50  backdrop-saturate-150 dark:bg-black dark:bg-opacity-20  sm:flex-row ">
          <img
            className="mx-0 block h-40 w-40 shrink-0 rounded-full border-4 border-slate-600/50 dark:border-yellow-600/50 sm:h-48 sm:w-48"
            alt="Mat's headshot"
            height={48}
            width={48}
            srcSet={`${Headshot400} 1x, ${Headshot600} 2x`}
            src={Headshot400}
          />
          <h1 className="mt-8 flex flex-col space-y-2 text-xl font-semibold  text-neutral-700 dark:text-neutral-200 sm:ml-6 sm:text-3xl">
            <div className="text-center">{`Hi, I'm Mat Dupont 👋`}</div>
            <div className="text-base font-medium text-slate-600 dark:text-amber-400 sm:text-xl">
              Welcome to my playground
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}
