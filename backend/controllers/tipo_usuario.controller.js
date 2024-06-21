import { TipoUsuario } from "../database/models/TipoUsuario.js";

export const getTiposUsuarios = async (_, res) => {
    try {
        const tiposUsuarios = await TipoUsuario.findAll();
        res.json(tiposUsuarios);
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor al buscar tipos de usuarios",
        });
    }
};

export const createTipoUsuario = async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevoTipoUsuario = { nombre };
        const tipoUsuarioExistente = await TipoUsuario.findOne({
            where: {
                nombre,
            },
        });
        if (!tipoUsuarioExistente) {
            const tipoUsuarioNuevo = await TipoUsuario.create(nuevoTipoUsuario);
            res.send(tipoUsuarioNuevo);
        } else {
            res.status(400).send({
                message: "Ya existe un tipo de usuario con ese nombre",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor al crear tipo de usuario",
        });
    }
};
