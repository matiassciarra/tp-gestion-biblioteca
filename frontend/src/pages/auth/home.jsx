// Asegúrate de tener un archivo CSS separado para los estilos
import "../../assets/home/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div className="home-container">
            <h1>Bienvenidos a la Biblioteca</h1>
            <Link to="/register">
                <button className="login-button">Crear cuenta</button>
            </Link>
        </div>
    );
};
