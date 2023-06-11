import type { Component } from "solid-js";

interface HamburgerIconProps {
  class?: string;
}

const HamburgerIcon: Component<HamburgerIconProps> = (props) => {
  return (
    <svg
      class={props.class}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="16"
    >
      <g fill="#242942" fill-rule="evenodd">
        <path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
