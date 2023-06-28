import "./menu-button.css";
import { HamburgerIcon } from "@components/icons";
import type { Component } from "solid-js";
import clsx from "clsx";
import CloseIcon from "@components/icons/close-icon";

interface MenuButtonProps {
  class?: string;
  action: () => void;
  isActive: boolean;
}

const MenuButton: Component<MenuButtonProps> = (props) => {
  return (
    <button class={clsx("menu-button", props.class)} onClick={props.action}>
      {props.isActive ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
};

export default MenuButton;
