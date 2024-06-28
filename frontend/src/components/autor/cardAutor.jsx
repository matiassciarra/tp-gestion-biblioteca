export const cardAutor = ({ object }) => {
    const { nombre, apellido, biografia, fecha_nacimiento, url_imagen, Pai } =
        object;
    const fechaNacimientoFormateada = fecha_nacimiento
        ? new Date(fecha_nacimiento).toLocaleDateString("es", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
          })
        : "";
    return (
        <article className=" d-flex container card">
            <div className="row">
                <div className="col-md-6">
                    {url_imagen ? (
                        <img
                            src={url_imagen}
                            className="img-fluid w-auto"
                            alt=""
                        />
                    ) : null}

                    <h1 className="card-title placeholder-glow card-header">
                        {nombre} {apellido}
                    </h1>
                </div>
                <div className="col">
                    <ul className="card-body list-group list-group-flush">
                        {biografia && (
                            <li className="list-group-item">
                                <h4>Biografia</h4>
                                <p>{biografia}</p>
                            </li>
                        )}
                        {fecha_nacimiento && (
                            <li className="list-group-item">
                                <h4>
                                    Fecha de nacimiento:{" "}
                                    {fechaNacimientoFormateada}
                                </h4>
                            </li>
                        )}

                        {Pai && (
                            <li className="list-group-item">
                                <h4>Pais: {Pai.nombre}</h4>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </article>
    );
};
