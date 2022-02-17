import Headshot from '../assets/headshot.jpg';

export function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-xl items-center justify-center">
      <div className="mx-auto flex max-w-xl items-center space-y-0 space-x-6 rounded-xl border border-neutral-200/25 bg-white bg-opacity-70  px-8 py-4  shadow-lg backdrop-blur-sm backdrop-brightness-50  backdrop-saturate-150 dark:bg-black dark:bg-opacity-20">
        <img
          className="mx-0 block w-48 shrink-0 rounded-full border-4 border-slate-600/50 dark:border-yellow-600/50"
          src={Headshot}
          alt="Mat's headshot"
        />
        <div className=" flex-column flex justify-start space-y-2 text-left align-top">
          <div className="space-y-0.5">
            <h1 className="text-3xl font-semibold text-neutral-700 dark:text-neutral-200">
              {`Hi, I'm Mat Dupont 👋`}
              <span className="text-xl font-medium text-slate-600 dark:text-amber-400">{`Welcome to my playground`}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
