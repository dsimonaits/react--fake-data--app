import React from "react";
import cl from "./LeftBar.module.css";
import { Link } from "react-router-dom";

const LeftBar = ({ props }) => {
  return (
    <div>
      <ul className={cl.leftBar__wrapper}>
        {props?.map((prop) => (
          <li>
            <Link to={prop.path} className={cl.link}>
              {prop.name}
            </Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;
