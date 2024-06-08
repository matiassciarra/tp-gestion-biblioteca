import  {Usuario}  from "../database/models/Usuario.model.js"
import { Pais } from "../database/models/Pais.model.js";
export const getUsers = async (req, res) => {
    const usuarios = await Usuario.findAll({include:Pais});
    try {
        console.log(usuarios);
        return res.send(usuarios);
    } catch(error) {
        res.status(500).send({message: "Error del servidor nose por que"})
    }
};

export const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Usuario.findByPk(id,{include:Pais});
        if (!user) {
            res.status(404).send({message: "No existe un usuario con el ID ingresado"})
        }
        else {
        res.send(user)};
    } catch (error) {
        res.status(500).send({message: "Error del servidor"})
    }
};