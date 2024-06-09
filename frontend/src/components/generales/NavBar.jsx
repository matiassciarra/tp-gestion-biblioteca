import { NavLink } from "react-router-dom";
import BookIcon from "../../assets/bookIcon";

export const NavBar = () => {
    return (
        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <BookIcon></BookIcon>
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/libros"
                                className="nav-link"
                                aria-current="page"
                            >
                                Libros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/autores" className="nav-link">
                                Autores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/usuarios" className="nav-link">
                                Usuarios
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/prestamos" className="nav-link">
                                Prestamos
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
