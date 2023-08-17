import * as React from "react";

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/mainLayout/MainLayout";

const App = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [],
  },
]);

export default App;
