import "./header.css";
import Logo from "@components/logo";
import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import clsx from "clsx";
import MenuButton from "@components/menu-button";
import Navigation from "@components/navigation";
import MobileNavigation from "@components/mobile-navigation";

interface HeaderProps {
  class: string;
}

const Header: Component<HeaderProps> = (props) => {
  const [menuIsOpen, setMenuIsOpen] = createSignal(false);

  const handleMenu = () => {
    setMenuIsOpen(!menuIsOpen());
  };

  return (
    <header class={clsx("header", props.class)}>
      <div class="header__container container">
        <Logo class="header__logo" />
        <MenuButton
          class="header__menu-button"
          action={handleMenu}
          isActive={menuIsOpen()}
        />
        <Navigation />
      </div>
      {menuIsOpen() && <MobileNavigation class="header__menu" />}
    </header>
  );
};

export default Header;
