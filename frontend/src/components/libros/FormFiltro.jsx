import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getAllAutores } from "../../service/autores";
import { getGeneros, getLibrosFiltrados } from "../../service/libros";

export const FormFiltro = ({ funcion }) => {
    const { register, handleSubmit } = useForm();
    const [autores, setAutores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [libros, setLibros] = useState([]);

    const onSubmit = async (filtros) => {
        console.log(filtros);
        const filtrosConValor = Object.entries(filtros).reduce(
            (acc, [key, value]) => {
                // Considera como "sin valor" tanto las cadenas vacías como los valores nulos o indefinidos
                if (value !== "" && value != null) {
                    acc[key] = value;
                }
                return acc;
            },
            {}
        );

        const librosFiltrados = await getLibrosFiltrados(filtrosConValor);
        setLibros(librosFiltrados);
        funcion(librosFiltrados);
    };

    useEffect(() => {
        const fetchData = async () => {
            setAutores(await getAllAutores());
            setGeneros(await getGeneros());
        };
        fetchData();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Autor</h3>
                <select
                    name="autorSelect"
                    id=""
                    className="form-select bg-dark text-light"
                    {...register("id_autor")}
                >
                    <option value="">Filtrar por autor</option>
                    {autores.map(({ id_autor, nombre, apellido }) => (
                        <option value={id_autor} key={id_autor}>
                            {nombre} {apellido}
                        </option>
                    ))}
                </select>
                <h3>Genero</h3>
                <select
                    name="genero"
                    id=""
                    className="form-select bg-dark text-light"
                    {...register("id_genero")}
                >
                    <option value="">Filtrar por genero</option>
                    {generos.map(({ id_genero, nombre }) => (
                        <option key={id_genero} value={id_genero}>
                            {nombre}
                        </option>
                    ))}
                </select>
                <h3>Fecha desde</h3>
                <input
                    type="date"
                    name="fechaDesde"
                    className="form-control bg-dark text-light"
                    {...register("fecha_desde")}
                />
                <h3>Fecha hasta</h3>
                <input
                    type="date"
                    name="fechaHasta"
                    className="form-control bg-dark text-light"
                    {...register("fecha_hasta")}
                />
                <button className="btn btn-primary m-2 w-100">Filtrar</button>
            </form>
        </>
    );
};
