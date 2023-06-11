import Logo from "@components/logo";
import type { Component } from "solid-js";
import clsx from "clsx";
import IconButton from "@components/icon-button";

interface HeaderProps {
  class: string;
}

const Header: Component<HeaderProps> = (props) => {
  return (
    <header class={clsx(props.class)}>
      <div class="container flex flex-row justify-between items-center">
        <Logo />
        <IconButton class="-mr-8" />
      </div>
    </header>
  );
};

export default Header;
