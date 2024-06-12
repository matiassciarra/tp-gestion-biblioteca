import { useLoaderData, useNavigate } from "react-router-dom";

function Libro() {
    const libro = useLoaderData();
    const navigate = useNavigate();
    const fechaPublicacion = new Date(libro.fecha_publicacion);
    const fechaFormateada = `${fechaPublicacion.getDate()}/${
        fechaPublicacion.getMonth() + 1
    }/${fechaPublicacion.getFullYear()}`;

    return (
        <div className="container">
            <button className="btn btn-info mb-2" onClick={() => navigate(-1)}>
                Regresar
            </button>
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={libro.url}
                        alt={libro.titulo}
                        className="img-fluid w-100"
                    />
                </div>
                <div className="col">
                    <h1 className="fw-bold text-dark">{libro.titulo}</h1>
                    <h3 className="fw-medium text-primary text-primary">
                        {libro.Autor.nombre + " " + libro.Autor.apellido}
                    </h3>
                    {libro.Genero ? <h4 className="fw-medium text-primary-emphasis">
                        {libro.Genero.nombre}
                    </h4>: null}
                    
                    <h4 className="fw-medium text-info-emphasis">
                        {fechaFormateada}
                    </h4>
                    {libro.estado_libro ? (
                        <h4 className="text-success">Disponible</h4>
                    ) : (
                        <h4 className="text-danger">No disponible</h4>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Libro;
