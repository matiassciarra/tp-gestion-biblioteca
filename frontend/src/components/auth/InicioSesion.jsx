import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const InicioSesion = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const { signin, errors: loginErrors } = useAuth();

    const onSubmit = (data) => {
        signin(data);
    };

    return (
        <div
            className="container h-auto bg-light p-3 g-2 rounded"
            style={{ maxWidth: "500px" }}
        >
            <div className="d-flex text-align-center justify-content-center">
                <h1 className="text-bold">Login</h1>
            </div>

            {loginErrors ? <h3 className="text-danger">{loginErrors}</h3> : ""}

            <form onSubmit={handleSubmit(onSubmit)}>
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
                        <span className="text-danger d-block">
                            {errors.correo.message}{" "}
                        </span>
                    )}
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
                </div>
                <button className="btn btn-primary m-2">Iniciar Sesion</button>
                <p>
                    ¿No tienes una cuenta?{" "}
                    <Link to="/register">Crear cuenta</Link>
                </p>
            </form>
        </div>
    );
};
