import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import Add from "../pages/Add";

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
    ],
  },
]);

export default router;
