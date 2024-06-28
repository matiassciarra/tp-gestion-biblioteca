import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteAutor } from "../../service/autores";
import { CardAutor } from "../../components/autor/cardAutor.jsx";
import "../../assets/autores/cardSingleAutor.css";
import { useAuth } from "../../context/AuthContext";
import { modalAutorCreate as Modal } from "../../components/autor/modalAutorCreate";
import { updateAutor as update } from "../../service/autores";
import swal from "sweetalert";

import { useState } from "react";
export const OneAutor = () => {
    const navigate = useNavigate(); // Estado para el toggle
    const { user } = useAuth();
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [number, setNumberEdit] = useState(null);
    const deleteHandler = async (id) => {
        swal({
            title: "Estas seguro que lo quieres eliminar?",
            text: "Se eliminara de forma permantes, y sus libros relacionados!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async (willDelete) => {
            
            if (willDelete) {
                await deleteAutor(id);
                setTimeout(() => {
                    navigate(-1); // Redirigir a la página anterior después de un pequeño retraso
                }, 200); // Puedes ajustar el tiempo según tus necesidades
                swal("Se elimino correctamente!", {
                    icon: "success",
                });
            } else {
                swal("No se ha eliminado");
            }
        });
        
    };

    const updateCreate = async (id, obj) => {
        try {
            const updateAutor = await update(id, obj);
            if (!updateAutor) {
                return false;
            }
            setAutor(updateAutor);
            swal({
                title: "Se actualizo con exito",
                text: "Haga click para ver los cambios",
                icon: "success",
                button: "Continuar",
            });
        } catch (error) {
            swal({
                title: error,
                text: "Hubo un error!",
                icon: "error",
                button: "Continuar",
            });
            return false;
        }
    };

    const updateModal = (id) => {
        setNumberEdit(id);
        setShowModalUpdate(true);
    };

    const data = useLoaderData();
    const [autor, setAutor] = useState(data);
    const {
        id_autor,
        nombre,
        apellido,
        biografia,
        fecha_nacimiento,
        url_imagen,
        Pai,
    } = autor;
    return (
        <section>
            <div>
                <div className="container g-2">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-primary text-white fw-bold m-2"
                    >
                        Volver atras
                    </button>
                    {user.rol === "admin" && (
                        <>
                            <button
                                onClick={() => updateModal(id_autor)}
                                className="btn btn-warning text-white fw-bold mx-2"
                            >
                                Modificar
                            </button>
                            <button
                                onClick={() => deleteHandler(id_autor)}
                                className="btn btn-danger fw-bold mx-2"
                            >
                                Eliminar usuario
                            </button>
                        </>
                    )}
                </div>
                <CardAutor
                    object={{
                        id_autor,
                        nombre,
                        apellido,
                        biografia,
                        fecha_nacimiento,
                        url_imagen,
                        Pai,
                    }}
                />
            </div>
            <Modal
                bool={showModalUpdate}
                setBool={setShowModalUpdate}
                action={updateCreate}
                idAutor={number}
            />
        </section>
    );
};
