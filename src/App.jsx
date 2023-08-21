import * as React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "src/components/layout/mainLayout/MainLayout";
import Applications from "src/pages/Applications";
import Posts from "src/features/Posts/Posts";
import PostByID from "src/pages/PostByID";

const App = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/applications",
        element: <Applications />,
        children: [
          { path: "/applications/posts", element: <Posts /> },
          { path: "/applications/posts/:id", element: <PostByID /> },
        ],
      },
    ],
  },
]);

export default App;
