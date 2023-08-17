import React from "react";
import NavBar from "../UI/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import cl from "./Layout.module.css";

const Layout = () => {
  return (
    <>
      <header className={cl.header}>
        <NavBar />
      </header>
      <main className={cl.main}>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
