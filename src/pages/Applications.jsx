import React from "react";
import LeftBar from "src/components/layout/leftBar/LeftBar";
import { Outlet, useLocation } from "react-router";

const Applications = () => {
  const applicationList = [{ name: "Posts", path: "posts" }];

  const location = useLocation();

  return (
    <>
      <LeftBar props={applicationList} />
      {location.pathname === "/applications" && (
        <h3 style={{ textAlign: "center" }}>
          Choose application from the list.
        </h3>
      )}

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Applications;
