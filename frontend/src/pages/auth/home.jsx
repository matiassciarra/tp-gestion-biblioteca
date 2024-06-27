// Asegúrate de tener un archivo CSS separado para los estilos
import "../../assets/home/home.css";
import { InicioSesion } from "../../components/auth/InicioSesion";
import { Home as Login } from "../../components/auth/home";
import { useAuth } from "../../context/AuthContext";
export const Home = () => {
    const {  isAuthenticated } = useAuth();

    return (
        <div className="home-container">
            {
                !isAuthenticated ? <InicioSesion /> : 
                <Login/>
            }
            
        </div>
    );
};
