import type { Component } from "solid-js";

import "./navigation.css";
import clsx from "clsx";

interface NavigationProps {
  class?: string;
}

const Navigation: Component<NavigationProps> = (props) => {
  return (
    <nav class={clsx(props.class, "navigation")}>
      <a class="navigation__link text text--condensed text--nav" href="#">
        PRODUCT
      </a>
      <a class="navigation__link text text--condensed text--nav" href="#">
        FEATURES
      </a>
      <a class="navigation__link text text--condensed text--nav" href="#">
        PRICING
      </a>
      <div class="navigation__separator"></div>
      <a
        class="navigation__link navigation__link--faded text text--condensed text--nav"
        href="#"
      >
        LOGIN
      </a>
    </nav>
  );
};

export default Navigation;
