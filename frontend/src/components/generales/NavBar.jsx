import { NavLink } from "react-router-dom";
import BookIcon from "../../assets/bookIcon";
import { Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./navBar.css";
export const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <BookIcon></BookIcon>
                    </NavLink>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavDropdown"
                    >
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink
                                    to="/libros"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link navLink"
                                            : "nav-link"
                                    }
                                    aria-current="page"
                                >
                                    Libros
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/autores"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link navLink"
                                            : "nav-link"
                                    }
                                >
                                    Autores
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/usuarios"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link navLink"
                                            : "nav-link"
                                    }
                                >
                                    Usuarios
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/prestamos"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link navLink"
                                            : "nav-link"
                                    }
                                >
                                    Prestamos
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/generos"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "nav-link navLink"
                                            : "nav-link"
                                    }
                                >
                                    Generos
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Navbar>
            <Outlet />
        </>
    );
};
