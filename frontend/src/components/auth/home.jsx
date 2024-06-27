
import { useAuth } from "../../context/AuthContext";
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

import '../../assets/home/cardHome.css'
export const Home = () => {
    const { user } = useAuth();
    const { username } = user;
    return (
        <Card>
            <Card.Body>
                <h1 className="titleUser">Bienvenido <span>{username}</span></h1>
                <h3><Card.Link as={NavLink} to="prestamos/me" >Ver tus prestamos</Card.Link></h3>
                <h3><Card.Link as={NavLink} to="/libros" >Ver Libros</Card.Link></h3>
            </Card.Body>
        </Card>
    );
};
