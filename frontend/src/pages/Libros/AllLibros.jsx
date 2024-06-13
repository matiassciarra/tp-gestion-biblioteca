import { ImagenLibro } from "../../components/libros/ImagenLibro";
import { useLoaderData, Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "../../components/libros/Input";

export const AllLibros = () => {
    const resLibros = useLoaderData()
    const [libros, setLibros] = useState(resLibros);
    console.log(libros);

    return (
        <>
            <Input textoDentroInput={"Ingrese titulo del libro"} />
            <div className="d-flex g-2 flex-wrap">
                {libros.map((libro) => (
                    <Link key={libro.id} to={`${libro.id}`}>
                        <ImagenLibro src={libro.url} />
                    </Link>
                ))}
            </div>
        </>
    );
};
