import { useLoaderData, useNavigate } from "react-router-dom";
import { DetalleUsuario } from "../../components/usuarios/DetalleUsuario";
import { ModificarUsuario } from "../../components/usuarios/ModificarUsuario";

export const UnUsuario = ( {option }) => {
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

    if (option === 1) {
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
} else if (option === 2) {
    return (
        <div>
            <ModificarUsuario
                object={{
                    id_usuario,
                    nombre,
                    apellido,
                    Pai,
                    url,
                }}
                option={1}
            />
        </div>
    )
} else if (option === 3) {
    return (
        <section className="sectionCard">
            <div className="info">
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
                <button
                        onClick={() => navigate(-1)}
                        className="btn btn-primary text-white fw-bold"
                        >
                            Volver
                </button>
                <button
                        onClick={() => navigate(`modificar/`)}
                        className="btn btn-primary text-white fw-bold"
                        >
                            Modificar
                </button>
            </div>

        </section>
    )} else if (option === 4) {
        return (
            <div>
                <ModificarUsuario
                    object={{
                        id_usuario,
                        nombre,
                        apellido,
                        Pai,
                        url,
                    }}
                    option={2}
                />
            </div>
        )

    }};