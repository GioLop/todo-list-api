import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.hook";

const ProtectedRoute = () => {
    const authContext = useAuth();
    const accessToken = authContext?.accessToken;

    if (!accessToken) return <Navigate to="/login" />;

    return <Outlet />;
};

export default ProtectedRoute;