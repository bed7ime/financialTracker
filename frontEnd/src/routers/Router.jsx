import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultLayout from "../components/DefaultLayout";
import Edit from "../pages/Edit";
import Dashboard from "../pages/dashboard";
import { FinancialRecordProvider } from "../contexts/financial.context";
import RouterProtected from "./RouterProtected";

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
            <RouterProtected>
              <Edit />{" "}
            </RouterProtected>
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
