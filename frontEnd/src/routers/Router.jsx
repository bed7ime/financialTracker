import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import Add from "../pages/Add";
import Edit from "../pages/Edit";
import Dashboard from "../pages/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "edit/:id",
        element: <Edit />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default router;
