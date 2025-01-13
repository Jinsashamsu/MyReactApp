import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => <h1>Dashboard (Protected)</h1>;

const Login: React.FC = () => <h1>Login Page</h1>;

type ProtectedRouteProps = {
  isAuthenticated: boolean;
  redirectPath?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  redirectPath = "/login",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

const Auth: React.FC = () => {
  const isAuthenticated = true; // Replace with actual authentication logic

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Auth;