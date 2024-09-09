import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import Edit from "../pages/Edit";
import Dashboard from "../pages/dashboard";
import { FinancialRecordProvider } from "../contexts/financial.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <FinancialRecordProvider>
        <DefaultLayout />
      </FinancialRecordProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
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
