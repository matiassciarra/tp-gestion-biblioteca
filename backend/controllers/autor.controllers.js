import { Autor } from "../database/models/Autor.model.js";

export const getAutores = async (req, res) => {
    try {
        res.send(await Autor.findAll());
    } catch (error) {
        res.status(500).send({ message: "No se encontraron autores" });
    }
};

export const getAutorPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const autor = await Autor.findByPk(id);
        res.send(autor);
    } catch (error) {
        res.status(500).send({
            message: "No se ha podido encontrar autor con esa ID",
        });
    }
};

export const createAutor = async (req, res) => {
    try {
        const { nombre, apellido, biografia, fecha_nacimiento } = req.body;
        const nuevoAutor = { nombre, apellido, biografia, fecha_nacimiento };
        const autorExistente = await Autor.findOne({
            where: {
                nombre: nombre,
                apellido: apellido,
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
