import React from "react";
import cl from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Applications", path: "/applications" },
  ];

  return (
    <nav>
      <ul className={cl.nav__list}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? [cl.nav__item, cl.nav__item_active].join(" ")
                  : cl.nav__item
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
