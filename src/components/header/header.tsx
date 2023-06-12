import "./header.css";
import Logo from "@components/logo";
import type { Component } from "solid-js";
import clsx from "clsx";
import MenuButton from "@components/menu-button";

interface HeaderProps {
  class: string;
}

const Header: Component<HeaderProps> = (props) => {
  return (
    <header class={clsx("header", props.class)}>
      <div class="header__container container">
        <Logo class="header__logo" />
        <MenuButton class="header__menu-button" />
      </div>
    </header>
  );
};

export default Header;
