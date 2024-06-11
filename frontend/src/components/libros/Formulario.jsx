import { useState, useEffect } from "react";
import { getGeneros } from "../../service/libros";
import { getAllAutores } from "../../service/autores";

export const Formulario = () => {
    const [generos, setGeneros] = useState([]);
    const [autores, setAutores] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const generos = await getGeneros();
            setGeneros(generos);
            const autores = await getAllAutores();
            setAutores(autores);
        };
        fetchData();
    }, []);
    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="inp-titulo" className="fw-bold text-dark">
                        Titulo
                    </label>
                    <input
                        type="text"
                        placeholder="Ingrese titulo nuevo"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inp-autor " className="fw-bold text-dark">
                        Autor
                    </label>
                    <select
                        name="autorSelect"
                        className="form-control"
                        placeholder="Seleccionar autor"
                    >
                        {autores.map((a) => (
                            <option key={a.id_autor}>
                                {a.nombre + " " + a.apellido}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="inp-generoSelect"
                        className="fw-bold text-dark"
                    >
                        Genero
                    </label>
                    <select name="generoSelect" className="form-control">
                        {generos.map((g) => (
                            <option key={g.id_genero}>{g.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label
                        htmlFor="fechaPublicacion"
                        className="fw-bold text-dark"
                    >
                        Fecha de publicacion
                    </label>
                    <input
                        type="date"
                        name="fechaPublicacion"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label
                        htmlFor="fechaPublicacion"
                        className="fw-bold text-dark"
                    >
                        URL de imagen
                    </label>
                    <input
                        type="text"
                        name="url"
                        className="form-control"
                        placeholder="Ingrese URL de imagen"
                    />
                </div>
            </form>
        </>
    );
};
