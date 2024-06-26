import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Input = ({ textoDentroInput, obtenerTitulo }) => {
    const { user, isAuthenticated } = useAuth();
    return (
        <div className="input-group mb-3 m-2">
            <span className="input-group-text">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                    <path d="M21 21l-6 -6" />
                </svg>
            </span>
            <input
                type="text"
                placeholder={textoDentroInput}
                className="form-control"
                onChange={(e) => obtenerTitulo(e.target.value)}
            />
            <button className="btn btn-primary"> Buscar</button>
            {isAuthenticated && user.rol == "admin" && (
                <Link to="/libros/crearOModificar">
                    <button className="btn btn-success"> Nuevo libro </button>
                </Link>
            )}
        </div>
    );
};
