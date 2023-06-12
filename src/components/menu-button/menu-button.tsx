import "./menu-button.css";
import { HamburgerIcon } from "@components/icons";
import type { Component } from "solid-js";
import clsx from "clsx";

interface MenuButtonProps {
  class?: string;
}

const MenuButton: Component<MenuButtonProps> = (props) => {
  return (
    <button class={clsx("menu-button", props.class)}>
      <HamburgerIcon class="menu-button__icon" />
    </button>
  );
};

export default MenuButton;
