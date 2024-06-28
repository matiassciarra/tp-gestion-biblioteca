import { NavLink, useNavigate } from "react-router-dom";
import BookIcon from "../../assets/bookIcon";
import { Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import { useAuth } from "../../context/AuthContext";
import "./navBar.css";
export const NavBar = () => {
    const navigate = useNavigate();
    const { user, isAuthenticated, signOut } = useAuth();
    return (
        <>
            {isAuthenticated && (
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container fluid>
                        <Navbar.Brand as={NavLink} to="/">
                            <BookIcon />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarNavDropdown" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <>
                                    
                                    <Nav.Link as={NavLink} to="/libros">
                                        Libros
                                    </Nav.Link>
                                    <Nav.Link as={NavLink} to="/autores">
                                        Autores
                                    </Nav.Link>

                                    {user.rol === "admin" && (
                                        <>
                                            <Nav.Link
                                                as={NavLink}
                                                to="/usuarios"
                                            >
                                                Usuarios
                                            </Nav.Link>
                                            <Nav.Link
                                                as={NavLink}
                                                to="/prestamos"
                                            >
                                                Prestamos
                                            </Nav.Link>
                                            <Nav.Link
                                                as={NavLink}
                                                to="/generos"
                                            >
                                                Generos
                                            </Nav.Link>
                                        </>
                                    )}
                                    <Nav.Link as={NavLink} to="prestamos/me">
                                        Mis prestamos
                                    </Nav.Link>
                                </>
                            </Nav>
                            <Nav className="drodown">
                                <NavDropdown
                                    title={user.username}
                                    id="basic-nav-dropdown"
                                >
                                    <NavDropdown.Item href="#action/3.1">
                                        <Nav.Link
                                            as={NavLink}
                                            to={`/usuarios/me`}
                                        >
                                            Ver mi perfil
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Nav.Link
                                            onClick={() => {
                                                signOut();
                                                navigate("/");
                                            }}
                                        >
                                            Cerrar Sesion
                                        </Nav.Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )}
            <Outlet />
        </>
    );
};
