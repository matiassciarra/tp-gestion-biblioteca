import { useEffect } from "react";
import { useState } from "react";
import { getGeneros } from "../../service/libros";

export const Filtros = () => {
    const [generos, setGeneros] = useState([]);

    useEffect(() => {
        const fetchGeneros = async () => {
            const generos = await getGeneros();
            setGeneros(generos);
        };
        fetchGeneros();
    }, []);

    return (
        <>
            <h2 className=" p-2 mt-5">Generos</h2>

            <button className="btn btn-primary m-2 w-100"> Filtrar</button>
        </>
    );
};
