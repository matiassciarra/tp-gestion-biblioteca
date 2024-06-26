// Asegúrate de tener un archivo CSS separado para los estilos
import "../../assets/home/home.css";
import { InicioSesion } from "../../components/inicio sesion/InicioSesion";

export const Home = () => {
    return (
        <div className="home-container">
            <InicioSesion />
        </div>
    );
};
