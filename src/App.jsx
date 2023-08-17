import * as React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout/MainLayout";
import Applications from "./pages/Applications";
import Posts from "./features/Posts/Posts";

const App = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/applications",
        element: <Applications />,
        children: [{ path: "/applications/posts", element: <Posts /> }],
      },
    ],
  },
]);

export default App;
