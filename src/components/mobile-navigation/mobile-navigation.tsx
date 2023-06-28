import type { Component } from "solid-js";

import "./mobile-navigation.css";
import clsx from "clsx";

interface NavigationProps {
  class?: string;
}

const MobileNavigation: Component<NavigationProps> = (props) => {
  return (
    <nav class={clsx(props.class, "mobile-navigation")}>
      <a
        class="mobile-navigation__link text text--condensed text--nav"
        href="#"
      >
        PRODUCT
      </a>
      <a
        class="mobile-navigation__link text text--condensed text--nav"
        href="#"
      >
        FEATURES
      </a>
      <a
        class="mobile-navigation__link text text--condensed text--nav"
        href="#"
      >
        PRICING
      </a>
      <div class="mobile-navigation__separator"></div>
      <a
        class="mobile-navigation__link mobile-navigation__link--faded text text--condensed text--nav"
        href="#"
      >
        LOGIN
      </a>
    </nav>
  );
};

export default MobileNavigation;
