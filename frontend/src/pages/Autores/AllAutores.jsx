import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import "../../assets/autores/autoresAll.css";
import { deleteAutor } from "../../service/autores";
import { modalAutorCreate as Modal } from "../../components/autor/modalAutorCreate";
import { createAutor } from "../../service/autores";
import { useAuth } from "../../context/AuthContext";

export const AllAutores = () => {
    const res = useLoaderData();
    const [data, setData] = useState(res);
    const [showModal, setShowModal] = useState(false);
    const { isAuthenticated, user } = useAuth();

    const AccionCreate = async (objeto, accion=false) => {
        if (!accion){
            const newUser = await createAutor(objeto);
            //aca agregar manejo de error
            setData([...data, newUser]);
            return true;
        }
        
    };

    const addAutor = () => {
        setShowModal(true);
    };
    // Función para eliminar usuario
    const handlerDelete = async (id) => {
        try {
            // Llama a la API para eliminar el autor
            await deleteAutor(id);
            // Actualiza el estado filtrando el autor eliminado
            const newData = data.filter((autor) => autor.id_autor !== id);
            setData(newData);
        } catch (error) {
            console.error("Error al eliminar el autor:", error);
        }
    };

    return (
        <div className="mx-4">
            <h1 className="tituloMain">Autores</h1>
            {isAuthenticated && user.rol == "admin" && (
                <button
                    type="button"
                    className="btn btn-success text-white fw-bold"
                    onClick={addAutor}
                >
                    Nuevo Autor
                </button>
            )}
            <div className="d-flex flex-wrap justify-content-center">
                {data.map(
                    ({ id_autor, nombre, apellido, biografia, url_imagen }) => (
                        <div
                            key={id_autor}
                            className="card mx-2 my-2"
                            style={{ maxWidth: "500px" }}
                        >
                            <h1 className="card-title mx-3">
                                {nombre} {apellido}
                            </h1>
                            <img
                                src={url_imagen}
                                alt="imagen"
                                className="justify-self-center img-fluid w-100 h-auto"
                            />
                            <div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link
                                            to={`${id_autor}`}
                                            className="card-link"
                                        >
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary"
                                            >
                                                Ver
                                            </button>
                                        </Link>
                                        {isAuthenticated &&
                                            user.rol == "admin" && (
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-warning card-link fw-bold"
                                                >
                                                    Modificar
                                                </button>
                                            )}
                                        {isAuthenticated &&
                                            user.rol == "admin" && (
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        handlerDelete(id_autor)
                                                    }
                                                    className="btn btn-outline-danger card-link fw-bold"
                                                >
                                                    Eliminar
                                                </button>
                                            )}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                )}
            </div>
            <Modal
                bool={showModal}
                setBool={setShowModal}
                action={AccionCreate}
            />
        </div>
    );
};
