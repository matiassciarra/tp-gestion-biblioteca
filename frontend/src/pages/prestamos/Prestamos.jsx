import { useLoaderData, useNavigate, NavLink } from "react-router-dom";
import { devolverPrestamoRequest } from "../../service/prestamos"; // Importar la función de devolución
import "../../assets/prestamos/prestamos.css";
import swal from "sweetalert";
export const Prestamos = ({ infoMe = false }) => {
    const data = useLoaderData();
    const navigate = useNavigate();

    const handleDevolver = async (id) => {
        try {
            await devolverPrestamoRequest(id);
            swal({
                title: "El prestamo fue devuelto con exito!",
                text: "has click en el boton para continuar",
                icon: "success",
                button: "Continuar",
            });
            navigate("/libros"); // Recargar la página para reflejar los cambios
        } catch (error) {
            swal({
                title: `Ups...Hubo un error!`,
                text: "has click en el boton para continuar",
                icon: "error",
                button: "Continuar",
            });
            console.error(error);
        }
    };

    return (
        <>
            <h1>Prestamos</h1>
            <section className="mx-4 my-2">
                {data.map(
                    ({
                        id,
                        id_libro,
                        Libro,
                        id_usuario,
                        fecha_devolucion_real,
                        Usuario,
                        fecha_prestamo,
                        fecha_devolucion,
                    }) => (
                        <div key={id} className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={Libro ? Libro.url : null}
                                        className="img-fluid rounded-start"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Prestamo Nro {id}
                                        </h5>
                                        {Libro ? (
                                            <NavLink
                                                to={`/libros/libro/${id_libro}`}
                                            >
                                                <h6>
                                                    Nombre Libro: {Libro.titulo}
                                                </h6>
                                            </NavLink>
                                        ) : (
                                            <h6>Libro no disponible</h6>
                                        )}
                                        {infoMe ? (
                                            <h6>
                                                Nombre del Usuario:{" "}
                                                {Usuario.username}
                                            </h6>
                                        ) : null}

                                        <h6>
                                            Fecha Prestamo: {fecha_prestamo}
                                        </h6>
                                        {fecha_devolucion ? (
                                            <h6>
                                                Fecha Devolucion:{" "}
                                                {fecha_devolucion}
                                            </h6>
                                        ) : (
                                            <h6>Todavia no fue devuelto</h6>
                                        )}
                                        {!fecha_devolucion_real ? (
                                            <button
                                                className="btn btn-primary"
                                                onClick={() =>
                                                    handleDevolver(id)
                                                }
                                            >
                                                Devolver Libro
                                            </button>
                                        ) : (
                                            <h6>
                                                fecha de devolucion real:{" "}
                                                {fecha_devolucion_real}
                                            </h6>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </section>
        </>
    );
};
