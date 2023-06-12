import type { Component } from "solid-js";

import "./illustration.css";
import clsx from "clsx";

interface IllustrationProps {
  class?: string;
}

const Illustration: Component<IllustrationProps> = (props) => {
  return (
    <div class={clsx("illustration", props.class)}>
      <div class="illustration__shape"></div>
      <div class="illustration__devices"></div>
    </div>
  );
};

export default Illustration;
