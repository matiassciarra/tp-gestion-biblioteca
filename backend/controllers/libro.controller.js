import { z } from "zod";
import Libro from "../database/models/Libro.model.js";
import Autor from "../database/models/Autor.model.js";
import { Genero } from "../database/models/Genero.model.js";
import { Pais } from "../database/models/Pais.model.js";
import { Op } from "sequelize";

export const CreateLibro = async (req, res) => {
    // Esquema utilizando la libreria Z, el cual me tiene que llegar un body especifico
    const createLibro = z.object({
        titulo: z.string(),
        id_genero: z.number(),
        id_autor: z.number(),
        fecha_publicacion: z.string().refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date format",
        }),
        url: z.string().optional(),
        estado_libro: z.boolean().optional(),
    });
    const validationResult = createLibro.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ message: validationResult.error.errors });
    }

    const {
        titulo,
        id_genero,
        id_autor,
        fecha_publicacion,
        url,
        estado_libro,
    } = validationResult.data;

    try {
        const genero = await Genero.findByPk(id_genero);
        if (!genero) {
            return res
                .status(400)
                .json({ message: "El ID del género no existe." });
        }

        // Verificar si el autor existe
        const autor = await Autor.findByPk(id_autor);
        if (!autor) {
            return res
                .status(400)
                .json({ message: "El ID del autor no existe." });
        }
        //TODO: CREAR VALIDACION SI EXISTE EL LIBRO
        const libroExist = await Libro.findOne({
            where: {
                id_autor: id_autor,
                id_genero: id_genero,
                titulo: titulo,
            },
        });
        if (libroExist) {
            throw new Error("El libro ya existe");
            //return res.status(400).json({message:""})
        }

        const nuevoLibro = await Libro.create({
            titulo,
            id_genero,
            id_autor,
            fecha_publicacion: new Date(fecha_publicacion),
            url: url || null,
            estado_libro: estado_libro !== undefined ? estado_libro : true,
        });

        return res
            .status(201)
            .json({ message: "Creado exitosamente", libro: nuevoLibro });
    } catch (error) {
        const statusCode = error.message === "El libro ya existe" ? 400 : 500;
        res.status(statusCode).json({ message: error.message });
    }
};

export const getLibro = async (req, res) => {
    try {
        const libros = await Libro.findAll({
            include: [{ model: Autor }, { model: Genero }],
        });
        return res.status(200).send(libros);
    } catch (error) {
        console.error("Error al obtener los libros:", error);
        return res.status(500).send({ error: "Error al obtener los libros." });
    }
};

export const shemaIdLibro = (req, res, next) => {
    const shemeIdLibro = z.object({
        id: z.string(),
    });
    const validationResult = shemeIdLibro.safeParse(req.params);
    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error.errors });
    }
    next();
};

export const getLibroId = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await Libro.findByPk(id, {
            include: [{ model: Genero }, { model: Autor, include: [Pais] }],
        });
        if (!resultado) {
            return res.status(404).send("no se encontro el libro");
        }
        return res.status(201).send(resultado);
    } catch (error) {
        console.log("mensaje de error:", error);
    }
};

export const deleteLibro = async (req, res) => {
    const { id } = req.params;
    try {
        const resultado = await Libro.findByPk(id, {
            include: [{ model: Genero }, { model: Autor, include: [Pais] }],
        });
        if (!resultado) {
            return res.status(404).send({ message: "no se encontro el libro" });
        } else {
            resultado.destroy();
            res.status(202).send({
                message: "Se ha eliminado el libro correctamente",
            });
        }
    } catch (error) {
        console.log("mensaje de error:", error);
    }
};

export const updateLibro = async (req, res) => {
    const updateLibro = z.object({
        titulo: z.string().optional(),
        id_genero: z.number().optional(),
        id_autor: z.number().optional(),
        fecha_publicacion: z
            .string()
            .refine((val) => !isNaN(Date.parse(val)), {
                message: "Invalid date format",
            })
            .optional(),
        url: z.string().optional(),
        estado_libro: z.boolean().optional(),
    });
    const validationResult = updateLibro.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).json({ error: validationResult.error.errors });
    }

    const {
        titulo,
        id_genero,
        id_autor,
        fecha_publicacion,
        url,
        estado_libro,
    } = validationResult.data;

    try {
        const libro = await Libro.findByPk(req.params.id);
        if (!libro) {
            return res.status(404).json({ error: "Libro no encontrado." });
        }

        // Verificar si el género existe si se está actualizando
        if (id_genero !== undefined) {
            const genero = await Genero.findByPk(id_genero);
            if (!genero) {
                return res
                    .status(400)
                    .json({ error: "El ID del género no existe." });
            }
        }

        // Verificar si el autor existe si se está actualizando
        if (id_autor !== undefined) {
            const autor = await Autor.findByPk(id_autor);
            if (!autor) {
                return res
                    .status(400)
                    .json({ error: "El ID del autor no existe." });
            }
        }
        const libroExist = await Libro.findOne({
            where: {
                id_autor: id_autor,
                id_genero: id_genero,
                titulo: titulo,
            },
        });
        if (libroExist) {
            throw new Error(
                "Ya existe un libro con el titulo y autor ingresados"
            );
            //return res.status(400).json({message:""})
        }

        // Actualizar el libro con los datos proporcionados
        await libro.update({
            titulo: titulo !== undefined ? titulo : libro.titulo,
            id_genero: id_genero !== undefined ? id_genero : libro.id_genero,
            id_autor: id_autor !== undefined ? id_autor : libro.id_autor,
            fecha_publicacion:
                fecha_publicacion !== undefined
                    ? new Date(fecha_publicacion)
                    : libro.fecha_publicacion,
            url: url !== undefined ? url : libro.url,
            estado_libro:
                estado_libro !== undefined ? estado_libro : libro.estado_libro,
        });
        return res.status(200).json(libro);
    } catch (error) {
        const statusCode = error.message === "El libro ya existe" ? 400 : 500;
        res.status(statusCode).json({ message: error.message });
    }
};

export const getLibrosPorGenero = async (req, res) => {
    const { id_genero } = req.query;
    try {
        const librosDeGenero = await Libro.findAll({
            where: {
                id_genero: id_genero,
            },
        });
        if (!librosDeGenero) {
            res.status(404).send({
                message: "No se encontraron libros de ese genero",
            });
        } else {
            res.send(librosDeGenero);
        }
    } catch (error) {
        res.status(500).send({
            message:
                "Ha existido un error de servidor al buscar libros de ese genero",
            error: error,
        });
    }
};

export const getLibrosPorTitulo = async (req, res) => {
    const { titulo } = req.query;
    try {
        const librosPorTitulo = await Libro.findAll({
            where: {
                titulo: {
                    [Op.like]: "%" + titulo + "%",
                },
            },
        });
        if (!librosPorTitulo) {
            res.status(404).send({
                message: "No se encontraron libros con ese titulo",
            });
        } else {
            res.send(librosPorTitulo);
        }
    } catch (error) {
        res.status(500).send({
            message:
                "Ha existido un error en el servidor al buscar libros con ese titulo",
            error: error,
        });
    }
};