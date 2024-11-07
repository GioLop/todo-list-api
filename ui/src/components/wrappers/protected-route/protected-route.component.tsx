import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.hook";

const ProtectedRoute = () => {
    const auth = useAuth();
    const accessToken = auth?.accessToken;

    if (!accessToken) return <Navigate to="/login" />;

    return <Outlet />;
};

export default ProtectedRoute;