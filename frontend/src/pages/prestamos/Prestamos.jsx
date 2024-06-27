import { Fragment } from "react";
import { useLoaderData, useNavigate, NavLink } from "react-router-dom";
export const Prestamos = () => {
    const data = useLoaderData();
    console.log(data);
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
                        Usuario,
                        fecha_prestamo,
                        fecha_devolucion,
                    }) => (
                        <div key={id} class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img

                                        src={ Libro ? 
                                          Libro.url : null}
                                        class="img-fluid rounded-start"
                                        alt="..."
                                    />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">
                                            Prestamo Nro {id}
                                        </h5>
                                        {Libro ? (
                                            <NavLink
                                                to={`/libros/libro/${id_libro}`}
                                            >
                                                <h6>
                                                    Nombre Libro: {Libro.titulo}
                                                </h6>{" "}
                                            </NavLink>
                                        ) : (
                                            <h6>Libro no disponible</h6>
                                        )}
                                        <h6>
                                          Nombre del Usuario: {Usuario.username}
                                        </h6>
                                        <h6> Fecha Prestamo : {fecha_prestamo} </h6>
                                       {fecha_devolucion ?
                                        (<h6>
                                           Fecha Devolucion : {fecha_devolucion}</h6>) : 
                                           (<h6>Todavia no fue devuelto</h6>)}
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
