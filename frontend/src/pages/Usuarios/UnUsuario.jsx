import { useLoaderData, useNavigate } from "react-router-dom";
import { DetalleUsuario } from "../../components/usuarios/DetalleUsuario";

export const UnUsuario = () => {
    const navigate = useNavigate();

    const {
        id_usuario,
        nombre,
        apellido,
        username,
        correo,
        Pai,
        url,
    } = useLoaderData();

    return (
        <section className="sectionCard">
            <div className="info">
                <span className="accion">
                    <button
                        onClick={() => navigate(-1)}
                        className="btn btn-primary text-white fw-bold"
                        >
                            Volver
                    </button>
                </span>
                <DetalleUsuario
                    object={{
                        id_usuario,
                        nombre,
                        apellido,
                        username,
                        correo,
                        Pai,
                        url,
                    }}
                />
            </div>

        </section>
    );
};