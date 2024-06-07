import { Usuario } from "../database/models/Usuario.model.js"

export const getUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch(error) {
        res.status(500).send({message: "Error del servidor"})
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Usuario.findByPk(id);
        if (!user) {
            res.status(404).send({message: "No existe un usuario con el ID ingresado"})
        }
        else {
        res.send(user)};
    } catch (error) {
        res.status(500).send({message: "Error del servidor"})
    }
};