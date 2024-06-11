import { useEffect } from "react";
import { useState } from "react";
import { getGeneros } from "../../service/libros";

export const Filtros = () => {
    const [generos, setGeneros] = useState([]);
    const [generoSeleccionado, setGeneroSeleccionado] = useState(1);

    useEffect(() => {
        const fetchGeneros = async () => {
            const generos = await getGeneros();
            setGeneros(generos);
        };
        fetchGeneros();
    }, []);

    return (
        <>
            <h2 className="p-2 mt-5">Generos</h2>
            <ul className="list-group">
                <li className="list-group-item list-group-item-action">
                    Todos
                </li>
                {generos.map((g) => (
                    <li
                        className="list-group-item list-group-item-action"
                        key={g.id_genero}
                        onClick={() => {
                            setGeneroSeleccionado(g.id_genero);
                            console.log(generoSeleccionado);
                        }}
                    >
                        {g.nombre}
                    </li>
                ))}
            </ul>
            <button className="btn btn-primary m-2 w-100"> Filtrar</button>
        </>
    );
};
