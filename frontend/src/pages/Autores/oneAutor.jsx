import { useLoaderData, useNavigate } from "react-router-dom";
import { deleteAutor } from "../../service/autores";
import { CardAutor } from "../../components/autor/cardAutor.jsx";
import "../../assets/autores/cardSingleAutor.css";
import { useAuth } from "../../context/AuthContext";

export const OneAutor = () => {
    const navigate = useNavigate(); // Estado para el toggle
    const { user } = useAuth();

    const deleteHandler = async (id) => {
        await deleteAutor(id);
        setTimeout(() => {
            navigate(-1); // Redirigir a la página anterior después de un pequeño retraso
        }, 200); // Puedes ajustar el tiempo según tus necesidades
    };
    const {
        id_autor,
        nombre,
        apellido,
        biografia,
        fecha_nacimiento,
        url_imagen,
        Pai,
    } = useLoaderData();
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
                                onClick={() => {}}
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
        </section>
    );
};
