import React from "react";
import cl from "./LeftBar.module.css";
import { NavLink } from "react-router-dom";

const LeftBar = ({ props }) => {
  return (
    <div className={cl.leftBar__wrapper}>
      <ul className={cl.leftBar__list}>
        {props?.map((prop) => (
          <li key={prop.name}>
            <NavLink
              to={prop.path}
              className={({ isActive }) =>
                isActive ? [cl.link, cl.link_active].join(" ") : cl.link
              }
            >
              {prop.name}
            </NavLink>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
