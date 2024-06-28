import { useLoaderData } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";
import { postPrestamoRequest } from "../../service/prestamos";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export const SolicitarPrestamo = () => {
    const libro = useLoaderData();
    const { user } = useAuth();
    const fechaActual = new Date().toISOString().split("T")[0];
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await postPrestamoRequest({
                id_libro: libro.id,
                id_usuario: user.id,
                fecha_prestamo: fechaActual,
                fecha_devolucion: data.fecha_devolucion,
            });
            swal({
                title: "Operacion exitosa",
                text: "El prestamo fue realizado con exito",
                icon: "success",
                timer: 3000,
            });
            navigate("/libros");
        } catch (error) {
            // Mostrar mensaje de error al usuario, por ejemplo:
            // alert("Error al solicitar el préstamo");
            console.error(error);
        }
    };
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={libro.url}
                        alt={libro.titulo}
                        className="img-fluid w-100"
                    />
                </div>
                <div className="col">
                    <h1 className="fw-bold text-success d-block">
                        Nuevo prestamo
                    </h1>
                    <h3 className="text-dark">
                        <b className="text-primary">Titulo: </b>
                        {libro.titulo}
                    </h3>
                    <h3 className="text-dark">
                        <b className="text-primary">Usuario solicitando:</b>{" "}
                        {user.username}
                    </h3>
                    <h3 className="text-dark">
                        <b className="text-primary">
                            Fecha inicio del prestamo
                        </b>{" "}
                        {fechaActual}
                    </h3>
                    <h3 className="text-primary">Ingrese fecha devolucion: </h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="date"
                            className="form-control"
                            {...register("fecha_devolucion", {
                                required: {
                                    value: true,
                                    message:
                                        "La fecha de devolucion es requerida",
                                },
                                validate: (value) => {
                                    const fechaDev = new Date(value);
                                    const fechaActual = new Date();
                                    if (fechaDev < fechaActual)
                                        return "La fecha de devolucion debe ser mayor a la fecha actual";
                                },
                            })}
                        />
                        {errors.fecha_devolucion && (
                            <span className="text-danger d-block">
                                {errors.fecha_devolucion.message}
                            </span>
                        )}
                        <button
                            className="btn btn-success my-2 mx-2"
                            type="submit"
                        >
                            Confirmar
                        </button>
                    </form>
                    <button
                        className="btn btn-danger my-2"
                        onClick={() => navigate(-1)}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};
