import type { Component } from "solid-js";

const Hero: Component = () => {
  return (
    <div class="container">
      <div class="mb-16 flex flex-row items-center gap-16">
        <p class="px-10 py-4 rounded-full bg-very-dark-blue font-condensed text-badge text-white uppercase">
          NEW
        </p>
        <p class="font-condensed text-overline-lg text-very-dark-blue/50 uppercase">
          MONOGRAPH DASHBOARD
        </p>
      </div>
      <h1 class="mb-16 font-condensed text-heading text-very-dark-blue uppercase">
        POWERFUL INSIGHTS INTO YOUR TEAM
      </h1>
      <p class="mb-27 text-body text-very-dark-blue/75">
        Project planning and time tracking for agile teams
      </p>
      <div class="flex flex-row items-center gap-16">
        <button class="px-24 py-12 bg-red rounded-button font-condensed text-button text-white uppercase">
          SCHEDULE A DEMO
        </button>
        <p class="font-condensed text-overline-md text-very-dark-blue/50">
          TO SEE A PREVIEW
        </p>
      </div>
    </div>
  );
};

export default Hero;
