import type { Component } from "solid-js";
import clsx from "clsx";

interface IllustrationProps {
  class?: string;
}

const Illustration: Component<IllustrationProps> = (props) => {
  return (
    <div
      class={clsx(props.class, "relative w-full pt-126 pb-60 overflow-hidden")}
    >
      <div class="absolute z-0 top-0 right-0 w-1/2 h-full rounded-bl-hero bg-light-grayish-blue"></div>
      <div class="relative z-10 container">
        <img
          class="w-hero max-w-none object-contain object-right md:max-w-full md:w-full md:h-292 md:object-center"
          src="illustration-devices.svg"
          alt=""
          draggable="false"
        />
      </div>
    </div>
  );
};

export default Illustration;
