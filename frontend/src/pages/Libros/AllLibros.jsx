import { ImagenLibro } from "../../components/libros/ImagenLibro";
import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Input } from "../../components/libros/Input";

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

    return (
        <>
            <Input
                textoDentroInput={"Ingrese titulo del libro"}
                obtenerTitulo={obtenerTitulo}
            />
            <div className="d-flex g-2 flex-wrap">
                {libros.map((libro) => (
                    <Link key={libro.id} to={`/libros/libro/${libro.id}`}>
                        <ImagenLibro src={libro.url} />
                    </Link>
                ))}
            </div>
        </>
    );
};
