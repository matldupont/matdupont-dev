import Headshot from '../assets/headshot.jpg';

export function HomePage() {
  return (
    <div className="min-h-screen max-w-screen-xl mx-auto flex justify-center items-center">
      <div className="px-8 border flex backdrop-blur-sm backdrop-brightness-50  bg-opacity-70 bg-white dark:bg-black dark:bg-opacity-20 backdrop-saturate-150 border-neutral-200/25  max-w-xl mx-auto  rounded-xl shadow-lg py-4  items-center space-y-0 space-x-6">
        <img
          className="block rounded-full mx-0 shrink-0 w-48 border-4 border-slate-600/50 dark:border-yellow-600/50"
          src={Headshot}
          alt="Mat's headshot"
        />
        <div className=" align-top flex flex-column justify-start space-y-2 text-left">
          <div className="space-y-0.5">
            <h1 className="text-neutral-700 dark:text-neutral-200 font-semibold text-3xl">
              {`Hi, I'm Mat Dupont 👋`}
              <span className="text-xl text-slate-600 dark:text-amber-400 font-medium">{`Welcome to my playground`}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
