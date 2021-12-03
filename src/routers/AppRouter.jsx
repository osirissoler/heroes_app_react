import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "../components/login/Login";
import { DashboarRoutes } from "./DashboarRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoute>
              <DashboarRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
