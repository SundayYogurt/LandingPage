import { createBrowserRouter, RouterProvider } from "react-router";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Order from "../Pages/Order";
import Drink from "../Pages/Drink";
import Other from "../Pages/Other";
const router = createBrowserRouter([
  {
    path: "/",
    // Main Layout
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "order",
        element: <Order />
      },
      {
        path: "drink",
        element: <Drink />
      },
      {
        path: "other",
        element: <Other />
      }
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
