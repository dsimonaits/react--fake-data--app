import React from "react";
import cl from "./navBar.module.css";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {" "}
      <div className={cl.navbar}>
        <div className={cl.navbar__items}>
          <Link to="/about">About</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
