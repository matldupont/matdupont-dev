import * as React from 'react';
import Headshot from '../assets/headshot.jpg';

export const HomePage: React.FC = () => (
  <div className="min-h-screen max-w-screen-xl mx-auto flex justify-center items-center">
    <div className="py-8 px-8 border flex backdrop-blur-sm backdrop-brightness-50 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-20 backdrop-saturate-150 border-neutral-200/25  max-w-xl mx-auto  rounded-xl shadow-lg space-y-2 sm:py-4  sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="block mx-auto rounded-full sm:mx-0 sm:shrink-0 w-48 border-4 border-slate-600/50 dark:border-yellow-600/50"
        src={Headshot}
        alt="Mat's headshot"
      />
      <div className=" align-top flex flex-column justify-start text-center space-y-2 sm:text-left">
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
