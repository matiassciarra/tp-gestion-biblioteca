import Prestamo from "../database/models/Prestamo.model.js";
import Libro from "../database/models/Libro.model.js";
import Usuario from "../database/models/Usuario.model.js";
import { z } from "zod";

export const getPrestamos = async (req, res) => {
    try {
        res.send(
            await Prestamo.findAll({
                where: { id_usuario: req.user.id },
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

        if (!(prestamo.id_usuario == req.id.user))
            res.status(401).json({
                message:
                    "No tienes permisos de acceder a este prestamo porque no te pertenece",
            });

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
        const parsedData = prestamoSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res
                .status(400)
                .send({ message: parsedData.error.issues[0].message });
        }
        const { id_libro, fecha_devolucion } = parsedData.data;
        const nuevoPrestamo = {
            id_libro,
            id_usuario: req.user.id,
            fecha_devolucion,
        };
        const libroExistente = await Libro.findByPk(id_libro);

        if (libroExistente && libroExistente.estado_libro == true) {
            const prestamoNuevo = await Prestamo.create(nuevoPrestamo);
            await libroExistente.update({ estado_libro: false });
            res.status(202).send(prestamoNuevo);
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
        if (!prestamoExistente)
            return res
                .status(404)
                .json({ message: "No existe el prestamo indicado" });
        if (!(prestamoExistente.id_usuario == req.user.id))
            return res.status(401).json({
                message:
                    "No tienes permisos de eliminar este prestamo porque no te pertenece",
            });
        const libroDelPrestamo = await Libro.findByPk(
            prestamoExistente.id_libro
        );
        if (libroDelPrestamo) {
            await libroDelPrestamo.update({ estado_libro: true });
        } else {
            return res
                .status(404)
                .json({ message: "El libro asociado al préstamo no existe" });
        }
        await prestamoExistente.destroy();
        res.json({ message: "Gracias, el libro ha sido devuelto con exito" });
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al devolver el libro",
            error: error.toString(),
        });
    }
};

export const updatePrestamo = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedData = prestamoSchema.safeParse(req.body);
        if (!parsedData.success) {
            return res
                .status(400)
                .send({ message: parsedData.error.issues[0].message });
        }
        const prestamoExistente = await Prestamo.findByPk(id);
        if (!(prestamoExistente.id_usuario == req.user.id))
            return res.status(403).send({
                message: "No tienes permiso de modificar el prestamo de otro",
            });

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

const prestamoSchema = z.object({
    id_libro: z.number(),
    fecha_devolucion: z.preprocess(
        (arg) => {
            if (typeof arg === "string") {
                const date = new Date(arg);
                return isNaN(date.getTime()) ? undefined : date;
            }
            return arg;
        },
        z.date().refine((fecha) => fecha > new Date(), {
            message: "La fecha de devolución debe ser mayor a la fecha actual",
        })
    ),
});
