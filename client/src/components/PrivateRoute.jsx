import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Chat from "./Chat";

const PrivateRoute = () => {
    const auth = useAuth();
    if (!auth.user) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <Outlet />;
            <Chat />
        </>
    );
};

export default PrivateRoute;
