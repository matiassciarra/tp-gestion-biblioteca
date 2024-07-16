import { ImagenLibro } from "../../components/libros/ImagenLibro";
import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/libros/Input";
import { FormFiltro } from "../../components/libros/FormFiltro";

export const AllLibros = () => {
    const resLibros = useLoaderData();
    const [titulo, setTitulo] = useState("");
    const [libros, setLibros] = useState(resLibros);

    const obtenerTitulo = (tituloIngresado) => {
        setTitulo(tituloIngresado);
    };

    useEffect(() => {
        filtrarPorTitulo(titulo);
    }, [titulo]);

    const filtrarPorTitulo = (titulo) => {
        if (!titulo) {
            setLibros(resLibros);
        }
        const librosFiltrados = resLibros.filter((libro) =>
            libro.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
        setLibros(librosFiltrados);
    };

    const mandarLibrosFiltrados = (librosFiltrados) => {
        setLibros(librosFiltrados);
    };

    return (
        <>
            <div className="fluid-container vh-100 p-2">
                <div className="row h-100">
                    <div className="col col-2 bg-dark text-light">
                        <FormFiltro funcion={mandarLibrosFiltrados} />
                    </div>
                    <div className="col col-10">
                        <Input
                            textoDentroInput={"Ingrese titulo del libro"}
                            obtenerTitulo={obtenerTitulo}
                        />
                        <div className="d-flex g-2 flex-wrap">
                            {libros.length ? (
                                libros.map((libro) => (
                                    <Link
                                        key={libro.id}
                                        to={`/libros/libro/${libro.id}`}
                                    >
                                        <ImagenLibro src={libro.url} />
                                    </Link>
                                ))
                            ) : (
                                <div className="d-flex">
                                    <h2>No se encontraron libros</h2>
                                    <button className="btn btn-dark">
                                        Volver
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
