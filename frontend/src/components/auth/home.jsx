
import { useAuth } from "../../context/AuthContext";
import Card from 'react-bootstrap/Card';
import { NavLink, useNavigate } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import '../../assets/home/cardHome.css'
export const Home = () => {
    const { user,signOut } = useAuth();
    const navigate = useNavigate()
    const { username } = user;

    const logout = ()=>{
        signOut();
        navigate(0)
    }
    return (
        <Card>
            <Card.Body>
                <h1 className="titleUser">Bienvenido <span>{username}</span></h1>
                <h3><Card.Link as={NavLink} to="prestamos/me" >Ver tus prestamos</Card.Link></h3>
                <h3><Card.Link as={NavLink} to="/libros" >Ver Libros</Card.Link></h3>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="accions-btn">
                    <Button variant="primary" onClick={()=>navigate('/usuarios/me')}>Ver mi perfil</Button>
                    <Button variant="outline-danger" onClick={logout}>Cerrar sesion</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
};
