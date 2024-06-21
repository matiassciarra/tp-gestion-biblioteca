import { Pais } from "../database/models/Pais.model.js"; 

export const getPaises = async (req, res) => {
    try {
        const paises = await Pais.findAll();
        res.json(paises);
    } catch (error) {
        res.status(500).send({ message: "Error del servidor" });
    }
};

export const getPaisById = async (req, res) => {
    try {
        const { id } = req.params;
        const pais = await Pais.findByPk(id);
        if (!pais) {
            res.status(404).send({
                message: "No existe un pais con el ID ingresado",
            });
        } else {
            res.send(pais);
        }
    } catch (error) {
        res.status(500).send({ message: "Error del servidor" });
    }
};

export const createPais = async (req, res) => {
    try {
        const { nombre } = req.body;
        const nuevoPais = { nombre };
        const paisExistente = await Pais.findOne({
            where: {
                nombre: nombre,
            },
        });
        if (!paisExistente) {
            const paisCreado = await Pais.create(nuevoPais);
            res.send(paisCreado);
        } else {
            res.status(400).send({
                message: "Ya existe un país con ese nombre",
            });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
        });
    }
};

export const deletePais = async (req, res) => {
    try {
        const { id } = req.params;
        const paisExistente = await Pais.findByPk(id);
        if (paisExistente) {
            await Pais.destroy({
                where: {
                    id_pais: id,
                },
            });
            res.send({ message: "País eliminado exitosamente" });
        } else {
            res.status(404).send({ message: "Pais no encontrado" });
        }
    } catch (error) {
        res.status(500).send({
            message: "Error del servidor",
        });
    }
};

export const updatePais = async (req, res) => {
    try {
        const { id } = req.params;
        const paisExistente = await Pais.findByPk(id);

        if (paisExistente) {
            await Pais.update(req.body, {
                where: {
                    id_pais: id,
                }
            });
            res.send({ message: "País actualizado exitosamente" });
        } else {
            res.status(404).send("País no encontrado");
        }
    } catch (error) {
        res.status(500).send({ message: "Error del servidor" });
    }
};