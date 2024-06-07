import { Pais } from "../database/models/Pais.model.js"

export const getPaises = async (req, res) => {
    try {
        const paises = await Pais.findAll();
        res.json(paises);
    } catch(error) {
        res.status(500).send({message: "Error del servidor"})
    }
};

export const getPaisById = async (req, res) => {
    try {
        const { id } = req.params;
        const pais = await Pais.findByPk(id);
        if (!pais) {
            res.status(404).send({message: "No existe un pais con el ID ingresado"})
        }
        else {
        res.send(pais)};
    } catch (error) {
        res.status(500).send({message: "Error del servidor"})
    }
};