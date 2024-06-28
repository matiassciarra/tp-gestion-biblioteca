import Autor from "../database/models/Autor.model.js";
import { Pais } from "../database/models/Pais.model.js";
import Libro from "../database/models/Libro.model.js";
import { Genero } from "../database/models/Genero.model.js";
import { z } from "zod";
export const getAutores = async (req, res) => {
    try {
        res.send(await Autor.findAll({ include: Pais }));
    } catch (error) {
        res.status(500).send({
            message: "No se encontraron autores",
            error: error.toString(),
        });
    }
};

export const getAutorPorId = async (req, res) => {
    try {
        const { id } = req.params;
        //verificamos el id
        const idSchema = z.number().int().positive();
        const parseResult = idSchema.safeParse(Number(id));
        if (!parseResult.success) {
            return res.status(400).send("ID no válido");
        }
        //consultamos el autor consigo todos sus libros
        const autor = await Autor.findByPk(id, {
            include: [
                Pais,
                {
                    model: Libro,
                    include: [Genero],
                },
            ],
        });
        if (!autor) {
            return res.status(404).send("no se encontro autor por id");
        }
        return res.send(autor);
    } catch (error) {
        res.status(500).send({
            message: "No se ha podido encontrar autor con esa ID",
        });
    }
};

export const createAutor = async (req, res) => {
    try {
        const AutorSchema = z.object({
            nombre: z.string(),
            apellido: z.string(), // Asumiendo que 'apellido' es requerido y debe ser un string
            biografia: z.string().optional(), // Hace que 'biografia' sea opcional
            fecha_nacimiento: z
                .string()
                .refine((val) => !isNaN(Date.parse(val)), {
                    message: "Invalid date format",
                })
                .optional(),
            id_pais: z.number().optional(), // Hace que 'id_pais' sea opcional
            url_imagen: z.string().optional(),
        });
        const validationResult = AutorSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res
                .status(400)
                .json({ error: validationResult.error.errors });
        }
        const {
            nombre,
            apellido,
            biografia,
            fecha_nacimiento,
            id_pais,
            url_imagen,
        } = validationResult.data;
        const nuevoAutor = {
            nombre,
            apellido,
            biografia,
            fecha_nacimiento,
            id_pais,
            url_imagen,
        };
        const autorExistente = await Autor.findOne({
            where: {
                nombre: nombre,
                apellido: apellido,
                id_pais: id_pais,
            },
        });
        if (!autorExistente) {
            const autorCreado = await Autor.create(nuevoAutor);
            res.send(autorCreado);
        } else {
            res.status(400).send({
                message: "Ya existe un autor con ese nombre y apellido",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al crear el autor",
            error: error.toString(),
        });
    }
};

export const deleteAutor = async (req, res) => {
    try {
        const { id } = req.params;
        const autorExistente = await Autor.findByPk(id);
        if (autorExistente) {
            await Autor.destroy({
                where: {
                    id_autor: id,
                },
            });
            res.send({ message: "Autor eliminado con exito" });
        } else {
            res.status(404).send("Autor no encontrado");
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al eliminar el autor",
            error: error.toString(),
        });
    }
};

export const updateAutor = async (req, res) => {
    try {
        const { id } = req.params;

        const autorExistente = await Autor.findByPk(id);

        if (autorExistente) {
            await Autor.update(req.body, { where: { id_autor: id } });

            res.send({ message: "Autor actualizado con éxito" });
        } else {
            res.status(404).send("Autor no encontrado");
        }
    } catch (error) {
        res.status(500).send({
            message: "Hubo un error al actualizar el autor",
            error: error.toString(),
        });
    }
};


