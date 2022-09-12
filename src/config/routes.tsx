import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../components/private-route";
import * as Dashboard from "../containers/dashboard";
import * as Auth from "../containers/authentication";

const AuthRoutes = () => (
  <Routes>
    <Route path="/" element={<Auth.Login />} />
    <Route path="/recuperar-senha" element={<Auth.RecoveryPassword />} />
  </Routes>
);

const DashboardRoutes = () => (
  <Routes>
    <Route path="/dashboard" element={<PrivateRoute />}>
      <Route path="/dashboard/resume" element={<Dashboard.Resume />} />
    </Route>
  </Routes>
);

export default () => (
  <>
    <AuthRoutes />
    <DashboardRoutes />
  </>
);
