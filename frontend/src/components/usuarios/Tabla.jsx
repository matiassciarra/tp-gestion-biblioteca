import React, { useState, useEffect } from "react";
import { getAllUsuarios } from "../../service/usuarios";
import { getPaises } from "../../service/paises";
import { getTipoUsuarios } from "../../service/tipoUsuario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
    faEdit,
    faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { deleteUsuario } from "../../service/usuarios";
import { useNavigate } from "react-router-dom";

const TablaUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const [paisesMap, setPaisesMap] = useState({});
    const [tiposUsuarioMap, setTiposUsuarioMap] = useState({});
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await deleteUsuario(id);
            setUsuarios(
                usuarios.filter((usuario) => usuario.id_usuario !== id)
            );
        } catch (error) {
            console.error("Error al eliminar el usuario");
        }
    };

    const handleConsultar = (id) => {
        navigate(`${id}`);
    };

    const handleModificar = (id) => {
        navigate(`modificar/${id}`);
    };

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const data = await getAllUsuarios();
                setUsuarios(data);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
            }
        };

        const fetchPaises = async () => {
            try {
                const dataPaises = await getPaises();

                const paisesIndexados = {};
                dataPaises.forEach((pais) => {
                    paisesIndexados[pais.id_pais] = pais.nombre;
                });
                setPaisesMap(paisesIndexados);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        const fetchTipoUsuario = async () => {
            try {
                const dataTiposUsuario = await getTipoUsuarios();

                const tiposUsuarioIndexados = {};
                dataTiposUsuario.forEach((tipoUsuario) => {
                    tiposUsuarioIndexados[tipoUsuario.id_tipo_usuario] =
                        tipoUsuario.nombre_tipo_usuario;
                });
                setTiposUsuarioMap(tiposUsuarioIndexados);
            } catch (error) {
                console.error("Error: ", error);
            }
        };

        fetchUsuarios();
        fetchPaises();
        fetchTipoUsuario();
    }, []);
    //console.log(paisesMap)
    return (
        <div className="table-responsive rounded p-4">
            <h2 className="my-4 text-center text-white fw-bold">Lista de Usuarios</h2>
            <table className="table table-striped table-bordered text-center">
                <thead className="thead-dark">
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>País</th>
                        <th>Tipo de Usuario</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id_usuario}>
                            <td>
                                <img
                                    src={usuario.url}
                                    style={{ width: "40px" }}
                                ></img>
                            </td>
                            <td className="align-middle">{usuario.nombre}</td>
                            <td className="align-middle">{usuario.apellido}</td>
                            <td className="align-middle">{usuario.username}</td>
                            <td className="align-middle">{usuario.correo}</td>
                            <td className="align-middle">
                                {paisesMap[usuario.id_pais]}
                            </td>
                            <td className="align-middle">
                                {tiposUsuarioMap[usuario.id_tipo_usuario]}
                            </td>
                            <td className="align-middle">
                                <button
                                    className="btn btn-info btn-sm m-1"
                                    onClick={() =>
                                        handleConsultar(usuario.id_usuario)
                                    }
                                    title="Consultar"
                                >
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <button
                                    className="btn btn-warning btn-sm m-1"
                                    onClick={() =>
                                        handleModificar(usuario.id_usuario)
                                    }
                                    title="Modificar"
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                <button
                                    className="btn btn-danger btn-sm m-1"
                                    onClick={() =>
                                        handleDelete(usuario.id_usuario)
                                    }
                                    title="Eliminar"
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaUsuarios;
