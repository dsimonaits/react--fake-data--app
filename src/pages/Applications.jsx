import React from "react";
import Container from "../components/layout/container/Container";
import LeftBar from "../components/layout/leftBar/LeftBar";
import { Outlet } from "react-router";

const Applications = () => {
  const applicationList = [
    { name: "Posts", path: "posts" },
    { name: "ToDo`s", path: "todos" },
    { name: "Contacts", path: "contacts" },
  ];

  return (
    <>
      <LeftBar props={applicationList} />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Applications;
