import { useParams, useLoaderData, useNavigate } from "react-router-dom";

export const OneAutor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        id_autor,
        nombre,
        apellido,
        biografia,
        fecha_nacimiento,
        url_imagen,
        id_pais,
        Pai,
    } = useLoaderData();
    return (
        <>
            <article>
                <h1>
                    {nombre} {apellido}
                </h1>
                <span>
                    {fecha_nacimiento && (
                        <div>
                            Aca se ejecuta la fecha de nacimiento{" "}
                            {fecha_nacimiento}
                        </div>
                    )}
                </span>
                <p>{biografia}</p>
                <span>{Pai && <h4>Pais: {Pai.nombre}</h4>}</span>
            </article>
            <button
                onClick={() => navigate(-1)}
                className="btn bg-primary color-primary"
            >
                Volver atras
            </button>
        </>
    );
};
