import React from "react";
import cl from "./Container.module.css";

const Container = ({ children, styles }) => {
  console.log(styles);
  return <div className={`${cl.container} ${styles}`}>{children}</div>;
};

export default Container;
