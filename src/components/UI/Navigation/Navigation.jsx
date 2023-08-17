import React from "react";
import cl from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={cl.nav__list}>
        <li className={cl.nav__item}>Home</li>
        <li className={cl.nav__item}>Applications</li>
        <li className={cl.nav__item}>About</li>
        <li className={cl.nav__item}>Contacts</li>
      </ul>
    </nav>
  );
};

export default Navigation;
