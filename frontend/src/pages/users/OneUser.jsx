import { useLoaderData } from "react-router-dom";

export const OneUser = () => {
    const usuario = useLoaderData();

    return (
        <div className="card" style={{ width: "25rem" }}>
            <img
                src={usuario.url}
                className="card-img-top"
                alt={usuario.username}
            />
            <div className="card-body">
                <h5 className="card-title">
                    <b>Nombre y apellido: </b>
                    {usuario.nombre} {usuario.apellido}
                </h5>
                <p className="card-text">
                    <b>Correo: </b>
                    {usuario.correo}
                </p>
                <p>
                    {" "}
                    <b>Pais: </b>
                    {usuario.Pai.nombre}
                </p>
                <p>
                    <b>Username: </b>
                    {usuario.username}
                </p>
            </div>
            <button className="btn btn-success">Modificar perfil</button>
            <button className="btn btn-dark">Cerrar sesion</button>
            <button className="btn btn-danger">Eliminar mi cuenta</button>
        </div>
    );
};
