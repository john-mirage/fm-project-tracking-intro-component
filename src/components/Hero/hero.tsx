import type { Component } from "solid-js";

import "./hero.css";
import clsx from "clsx";

interface HeroProps {
  class?: string;
}

const Hero: Component<HeroProps> = (props) => {
  return (
    <section class={clsx(props.class, "hero container")}>
      <div class="hero__row">
        <p class="hero__badge text text--condensed text--badge">NEW</p>
        <p class="hero__overline text text--condensed text--overline-lg">
          MONOGRAPH DASHBOARD
        </p>
      </div>
      <h1 class="hero__title text text--condensed text--heading">
        POWERFUL INSIGHTS INTO YOUR TEAM
      </h1>
      <p class="hero__subtitle text text--sans text--body">
        Project planning and time tracking for agile teams
      </p>
      <div class="hero__row">
        <button class="hero__button">
          <span class="text text--condensed text--button">SCHEDULE A DEMO</span>
        </button>
        <p class="hero__button-description text text--condensed text--overline-md">
          TO SEE A PREVIEW
        </p>
      </div>
    </section>
  );
};

export default Hero;
