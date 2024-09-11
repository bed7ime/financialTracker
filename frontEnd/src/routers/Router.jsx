import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import Edit from "../pages/Edit";
import Dashboard from "../pages/dashboard";
import { FinancialRecordProvider } from "../contexts/financial.context";

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
        path: "edit/:id",
        element: (
          <FinancialRecordProvider>
            <Edit />{" "}
          </FinancialRecordProvider>
        ),
      },
      {
        path: "dashboard",
        element: (
          <FinancialRecordProvider>
            <Dashboard />{" "}
          </FinancialRecordProvider>
        ),
      },
    ],
  },
]);

export default router;
