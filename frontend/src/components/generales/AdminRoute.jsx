import { useAuth } from "../../context/AuthContext";
import { useNavigate, Outlet } from "react-router-dom";

export function AdminRoute() {
    const { user } = useAuth();
    const navigate = useNavigate();

    if (user.rol != "admin")
        return <h1>No tienes permiso de entrar a esta seccion</h1>;

    return <Outlet />;
}
