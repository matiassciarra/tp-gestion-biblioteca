import { Prestamo } from "../database/models/Prestamo.model.js";
import Libro from "../database/models/Libro.model.js";
import { Usuario } from "../database/models/Usuario.model.js";

export const getPrestamos = async (req, res) => {
    try {
        res.send(
            await Prestamo.findAll({
                include: [{ model: Libro }, { model: Usuario }],
            })
        );
    } catch (error) {
        res.status(500).send({
            message: "Error al buscar prestamos",
            error: error.toString(),
        });
    }
};

export const getPrestamoPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const prestamo = await Prestamo.findByPk(id, {
            include: [{ model: Libro }, { model: Usuario }],
        });
        if (!prestamo) {
            return res
                .status(404)
                .send("no existe prestamo para la id indicada");
        }
        return res.send(prestamo);
    } catch (error) {
        res.status(500).send({
            message: "Error en el servidor al buscar por id al prestamo",
            error: error.toString(),
        });
    }
};

export const createPrestamo = async (req, res) => {
    try {
        const { id_libro, id_usuario, fecha_devolucion } = req.body;
        const nuevoPrestamo = {
            id_libro,
            id_usuario,
            fecha_devolucion,
        };
        const libroExistente = await Libro.findByPk(id_libro);

        if (libroExistente && libroExistente.estado_libro == true) {
            await Prestamo.create(nuevoPrestamo);
            await libroExistente.update({ estado_libro: false });
            res.status(202).send(nuevoPrestamo);
        } else {
            res.status(400).send({
                message:
                    "No es posible realizar el prestamo debido a que tal libro ya fue prestado, o no existe",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al crear el prestamo",
            error: error.toString(),
        });
    }
};

export const deletePrestamo = async (req, res) => {
    try {
        const { id } = req.params;
        const prestamoExistente = await Prestamo.findByPk(id);
        if (prestamoExistente) {
            await Prestamo.destroy({
                where: {
                    id: id,
                },
            });
            res.send({ message: "Prestamo eliminado con exito" });
        } else {
            res.status(404).send({ message: "Prestamo no encontrado" });
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al eliminar el prestamo",
            error: error.toString(),
        });
    }
};

export const updatePrestamo = async (req, res) => {
    try {
        const { id } = req.params;

        const prestamoExistente = await Prestamo.findByPk(id);

        if (prestamoExistente) {
            await Prestamo.update(req.body, { where: { id: id } });

            res.send({ message: "Prestamo actualizado con éxito" });
        } else {
            res.status(404).send({
                message:
                    "Prestamo no encontrado, por favor revise bien la id ingresada",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al actualizar el prestamo",
            error: error.toString(),
        });
    }
};
