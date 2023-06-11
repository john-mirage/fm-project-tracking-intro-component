import { HamburgerIcon } from "@components/icons";
import type { Component } from "solid-js";
import clsx from "clsx";

interface IconButtonProps {
  class?: string;
}

const IconButton: Component<IconButtonProps> = (props) => {
  return (
    <button
      class={clsx(
        props.class,
        "flex flex-row justify-center items-center w-40 h-40"
      )}
    >
      <HamburgerIcon class="w-24 h-16" />
    </button>
  );
};

export default IconButton;
