import { useState, useEffect } from "react";
import { getGeneros, createLibro } from "../../service/libros";
import { getAllAutores } from "../../service/autores";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export const Formulario = () => {
    const [generos, setGeneros] = useState([]);
    const [autores, setAutores] = useState([]);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = handleSubmit( async (data) => {
        try {
            const response = await createLibro(data);
            swal({
                title: "Nuevo libro: " + data.titulo,
                text: response.message,  // Utiliza el mensaje del backend
                icon: "success",
                button: "Aceptar",
            });
            navigate(-1);
        } catch (error) {
            swal({
                title: "Error",
                text: error.message,
                icon: "error",
                button: "Aceptar",
            });
        }
    
    });

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
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="inp-titulo" className={`fw-bold text-dark`}>
                        Titulo
                    </label>
                    <input
                        type="text"
                        placeholder="Ingrese titulo nuevo"
                        className={`form-control ${
                            errors.titulo ? "is-invalid" : ""
                        }`}
                        {...register("titulo", {
                            required: {
                                value: true,
                                message: "Titulo es requerido",
                            },
                            maxLength: {
                                value: 50,
                                message:
                                    "El titulo debe contener como maximo 50 caracteres",
                            },
                            minLength: {
                                value: 3,
                                message:
                                    "El titulo debe contener como minimo 3 caracteres",
                            },
                        })}
                    />
                    {errors.titulo && (
                        <span className="text-danger">
                            {errors.titulo.message}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="inp-autor " className="fw-bold text-dark">
                        Autor
                    </label>
                    <select
                        name="autorSelect"
                        className={`form-control ${
                            errors.id_autor ? "is-invalid" : ""
                        }`}
                        placeholder="Seleccionar autor"
                        {...register("id_autor", {
                            required: {
                                value: true,
                                message: "Debe seleccionar un autor",
                            },
                            setValueAs: (value) => parseInt(value, 10),
                        })}
                    >
                        <option value="">Seleccionar Autor</option>
                        {autores.map((a) => (
                            <option key={a.id_autor} value={a.id_autor}>
                                {a.nombre + " " + a.apellido}
                            </option>
                        ))}
                    </select>
                    {errors.id_autor && (
                        <span className="text-danger">Autor es requerido</span>
                    )}
                </div>
                <div className="form-group">
                    <label
                        htmlFor="inp-generoSelect"
                        className="fw-bold text-dark"
                    >
                        Genero
                    </label>
                    <select
                        name="generoSelect"
                        className={`form-control ${
                            errors.id_genero ? "is-invalid" : ""
                        }`}
                        {...register("id_genero", {
                            required: true,
                            setValueAs: (value) => parseInt(value, 10),
                        })}
                    >
                        <option value="">Seleccionar Genero</option>
                        {generos.map((g) => (
                            <option key={g.id_genero} value={g.id_genero}>
                                {g.nombre}
                            </option>
                        ))}
                    </select>
                    {errors.id_genero && (
                        <span className="text-danger">Genero es requerido</span>
                    )}
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
                        className={`form-control ${
                            errors.fecha_publicacion ? "is-invalid" : ""
                        }`}
                        {...register("fecha_publicacion", {
                            required: {
                                value: true,
                                message: "fecha de publicacion es requerida",
                            },
                            validate: (value) => {
                                const fechaPublicacion = new Date(value);
                                const fechaActual = new Date();

                                if (fechaPublicacion > fechaActual) {
                                    return "La fecha de publicacion debe ser menor a la fecha actual";
                                }
                                return true;
                            },
                        })}
                    />
                    {errors.fecha_publicacion && (
                        <span className="text-danger">
                            {errors.fecha_publicacion.message}
                        </span>
                    )}
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
                        className={`form-control ${
                            errors.url ? "is-invalid" : ""
                        }`}
                        placeholder="Ingrese URL de imagen"
                        {...register("url", {
                            required: {
                                value: true,
                                message:
                                    "La url de la imagen del libro es requerida",
                            },
                            pattern: {
                                value: /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
                                message: "No sigue patron de url valido",
                            },
                        })}
                    />
                    {errors.url && (
                        <span className="text-danger">
                            {errors.url.message}
                        </span>
                    )}
                </div>
                <div className="container-fluid d-flex m-3">
                    <button className="btn btn-success ml-2 " type="submit">
                        Crear nuevo libro
                    </button>
                    <button
                        className="btn btn-dark mx-2"
                        onClick={() => {
                            navigate(-1);
                        }}
                        type="button"
                    >
                        Regresar
                    </button>
                </div>
            </form>
        </>
    );
};
