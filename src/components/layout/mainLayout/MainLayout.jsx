import React from "react";
import Container from "../container/Container";
import cl from "./mainLayout.module.css";
import Navigation from "../../UI/Navigation/Navigation";
import { Outlet } from "react-router";

const mainLayout = ({ children }) => {
  return (
    <>
      <header>
        <Container styles={[cl.header__container].join(" ")}>
          <Navigation />
        </Container>
      </header>
      <main>
        <Container styles={cl.main__container}>
          <Outlet />
        </Container>
      </main>
      <footer></footer>
    </>
  );
};

export default mainLayout;
