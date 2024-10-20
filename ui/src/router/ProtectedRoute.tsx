import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.hook";

const ProtectedRoute = () => {
    const authContext = useAuth();
    const jwtToken = authContext?.jwtToken;

    if (!jwtToken) return <Navigate to="/login" />;

    return <Outlet />;
};

export default ProtectedRoute;