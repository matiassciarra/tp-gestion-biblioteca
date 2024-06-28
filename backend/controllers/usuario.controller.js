import Usuario from "../database/models/Usuario.model.js";
import { Pais } from "../database/models/Pais.model.js";
import Prestamo from "../database/models/Prestamo.model.js";
import Libro from "../database/models/Libro.model.js";
export const userMe = async (req,res) =>{
    const {id} = req.user
    try {
        const user = await Usuario.findByPk(id,{
            include: [
                {
                    model: Pais,
                },
                {
                    model: Prestamo,
                    as: 'Prestamos',
                    include: [
                        {
                            model: Libro,
                            as: 'Libro'
                        }
                    ]
                }
            ]
        });
        if (!user) {
            return res.status(404).json({message:"usuario no encontrado"})
        }
        return res.json(user)
    } catch (error) {
        return res.message(500).json({message:'hubo un error'})
    }
    
}
export const getUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll({
            include: Pais,
            attributes: { exclude: ["password"] },
        });
        return res.send(usuarios);
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor al tratar de encontrar usuarios",
        });
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Usuario.findByPk(id, {
            include: Pais,
            attributes: { exclude: ["password"] },
        });
        if (!user) {
            res.status(404).send({
                message: "No existe un usuario con el ID ingresado",
            });
        } else {
            res.send(user);
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
            error: error.toString(),
        });
    }
};

export const createUsuario = async (req, res) => {
    try {
        const { nombre, apellido, correo, id_pais, username, password, id_tipo_usuario} = req.body;
        const nuevoUsuario = {
            nombre,
            apellido,
            correo,
            id_pais,
            username,
            password,
            id_tipo_usuario

        };
        const usuarioExistente = await Usuario.findOne({
            where: {
                correo: correo,
            },
        });
        if (!usuarioExistente) {
            const usuarioCreado = await Usuario.create(nuevoUsuario);
            res.send(usuarioCreado);
        } else {
            res.status(400).send({
                message: "Ya existe un usuario con ese correo",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
            error: error.toString(),
        });
    }
};

export const deleteUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioExistente = await Usuario.findByPk(id);
        if (usuarioExistente) {
            await Usuario.destroy({
                where: {
                    id_usuario: id,
                },
            });
            res.send({ message: "Usuario eliminado exitosamente" });
        } else {
            res.status(400).send({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
            error: error.toString(),
        });
    }
};

export const updateUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioExistente = await Usuario.findByPk(id);

        if (usuarioExistente) {
            await Usuario.update(req.body, {
                where: {
                    id_usuario: id,
                },
            });
            res.send({ message: "Usuario actualizado exitosamente" });
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
            error: error.toString(),
        });
    }
};

export const patchUsuarioMe = async (req,res) => {
    try {
        const { id } = req.user;
        const usuarioExistente = await Usuario.findByPk(id);

        if (usuarioExistente) {
            await Usuario.update(req.body, {
                where: {
                    id_usuario: id,
                },
            });
            res.send({ message: "Usuario actualizado exitosamente" });
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
            error: error.toString(),
        });
    }
}