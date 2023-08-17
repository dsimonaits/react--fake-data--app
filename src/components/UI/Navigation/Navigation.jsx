import React from "react";
import cl from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className={cl.nav__list}>
        <li className={cl.nav__item}>
          <Link to="/">Home</Link>
        </li>
        <li className={cl.nav__item}>
          <Link to="/applications">Applications</Link>
        </li>
        <li className={cl.nav__item}>
          <Link to="/about">About</Link>
        </li>
        <li className={cl.nav__item}>
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
