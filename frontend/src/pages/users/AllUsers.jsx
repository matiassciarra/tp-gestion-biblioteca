import { useLoaderData } from "react-router-dom";

export const AllUsers = () => {
    const usuarios = useLoaderData();
    return (
        <>
            <table className="table table-striped bordered table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Imagen perfil</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Username</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Pais</th>
                        <th scope="col">Tipo usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((u) => (
                        <tr key={u.id_usuario}>
                            <th>
                                <img
                                    src={u.url}
                                    alt={u.username}
                                    style={{ width: "40px", height: "40px" }}
                                />
                            </th>
                            <th>{u.nombre}</th>
                            <th>{u.apellido}</th>
                            <th>{u.username}</th>
                            <th>{u.correo}</th>
                            <th>{u.Pai.nombre}</th>
                            <th>{u.id_tipo_usuario}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};
