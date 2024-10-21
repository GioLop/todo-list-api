import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.hook";

const ProtectedRoute = () => {
    const authContext = useAuth();
    const token = authContext?.token;

    if (!token) return <Navigate to="/login" />;

    return <Outlet />;
};

export default ProtectedRoute;