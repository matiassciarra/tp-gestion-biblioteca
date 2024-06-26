import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getPaises } from "../../service/paises";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export const FormularioRegistro = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { signup, isAuthenticated, errors: registerErrors } = useAuth();

    const navigate = useNavigate();
    const [paises, setPaises] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/libros");
        }
    }, [isAuthenticated]);

    useEffect(() => {
        const fetchPaises = async () => {
            const paisesTraidos = await getPaises();
            setPaises(paisesTraidos);
        };
        fetchPaises();
    }, []);

    const onSubmit = async (data) => {
        const { confirmPassword, ...formData } = data;
        signup(formData);
    };

    return (
        <div
            className="container mt-5 border p-3 rounded"
            style={{ maxWidth: "500px" }}
        >
            <h2>Registro de Usuario</h2>
            {registerErrors ? (
                <h3 className="text-danger">{registerErrors}</h3>
            ) : (
                ""
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Nombre</label>
                    <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        {...register("nombre", {
                            required: {
                                value: true,
                                message: "El nombre es requerido",
                            },
                            minLength: {
                                value: 2,
                                message:
                                    "El nombre debe ser de al menos 2 caracteres",
                            },
                        })}
                    />
                    {errors.nombre && (
                        <span className="text-danger">
                            {errors.nombre.message}{" "}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        className="form-control"
                        name="apellido"
                        {...register("apellido", {
                            required: {
                                value: true,
                                message: "El apellido es requerido",
                            },
                            minLength: {
                                value: 2,
                                message:
                                    "El apellido debe ser de al menos 2 caracteres",
                            },
                        })}
                    />
                    {errors.apellido && (
                        <span className="text-danger">
                            {errors.apellido.message}{" "}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Nombre de Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "El username es requerido",
                            },
                            minLength: {
                                value: 4,
                                message:
                                    "El nombre de usuario debe ser de al menos 4 caracteres",
                            },
                            maxLength: {
                                value: 30,
                                message:
                                    "El nombre de usuario debe contener como maximo 30 caracteres",
                            },
                        })}
                    />
                    {errors.username && (
                        <span className="text-danger">
                            {errors.username.message}{" "}
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        name="correo"
                        {...register("correo", {
                            required: {
                                value: true,
                                message: "El correo electrónico es requerido",
                            },
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message:
                                    "El formato del correo electrónico no es válido",
                            },
                        })}
                    />
                    {errors.correo && (
                        <span className="text-danger">
                            {errors.correo.message}{" "}
                        </span>
                    )}
                </div>
                <label htmlFor="">Password</label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "La contraseña es requerida",
                        },
                        minLength: {
                            value: 8,
                            message:
                                "La contraseña debe tener como mínimo 8 caracteres",
                        },
                    })}
                />
                {errors.password && (
                    <span className="text-danger">
                        {errors.password.message}{" "}
                    </span>
                )}
                <label>Confirmar password</label>

                <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    {...register("confirmPassword", {
                        required: {
                            value: true,
                            message: "Confirmar contraseña es requerido",
                        },
                        validate: (value) =>
                            value === watch("password") ||
                            "Las contraseñas no coinciden",
                    })}
                />
                {errors.confirmPassword && (
                    <span className="text-danger">
                        {errors.confirmPassword.message}{" "}
                    </span>
                )}
                <div className="form-group mb-3">
                    <label>País</label>
                    <select
                        className="form-control"
                        name="pais"
                        {...register("id_pais", {
                            required: {
                                value: true,
                                message: "El pais es requerido",
                            },
                            setValueAs: (value) => parseInt(value, 10),
                        })}
                    >
                        <option value="">Seleccionar pais</option>
                        {paises.map((p) => (
                            <option key={p.id_pais} value={p.id_pais}>
                                {p.nombre}
                            </option>
                        ))}
                    </select>
                    {errors.id_pais && (
                        <span className="text-danger">
                            {errors.id_pais.message}
                        </span>
                    )}
                </div>
                <button type="submit" className="btn btn-primary">
                    Registrar
                </button>
            </form>
            <p>
                ¿Ya tienes una cuenta? <Link to="/">Iniciar sesion</Link>
            </p>
        </div>
    );
};
