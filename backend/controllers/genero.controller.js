import { Genero } from "../database/models/Genero.model.js";

//rutas llamadas
export const getGeneros = async (req, res) => {
    try {
        return res.send(await Genero.findAll());
    } catch (error) {
        res.status(500).json({message:'hubo un error desconocido'})
    }
};


//llamada por genero
const buscarGeneroById = async (id) => {
    return await Genero.findByPk(id);
};


export const getGeneroById = async (req, res) => {
    const { id } = req.params;
    const resultado = await buscarGeneroById(id);
    if (!resultado) {
        //mandar un mensaje de error 404 de no encontrado
        return res.status(404).json({ message: "Género no encontrado" });
    }
    return res.send(resultado);
};

export const createGenero = async (req, res) => {
    try {
        const { nombre ,url } = req.body; //Recibimos el nombre del genero
        if (!nombre) {
            return res
                .status(400)
                .json({ message: "El campo nombre del género es obligatorio" });
        }
        // Verificar si el género ya existe
        const generoExistente = await Genero.findOne({
            where: { nombre: nombre },
        }); //Se busca por nombre
        if (generoExistente) {
            return res.status(409).json({ message: "El género ya existe" });
        }

        // Crear el nuevo género
        const nuevoGenero = await Genero.create({ nombre: nombre , url:url});
        res.status(201).json(nuevoGenero);
    } catch (error) {
        res.status(500).json({
            message: "Error al crear el género",
            error: error.message,
        });
    }
};

export const deleteGenero = async (req, res) => {
    const { id } = req.params;

    try {
        const resultado = await buscarGeneroById(id);
        if (!resultado) {
            return res.status(404).json({ message: "Género no encontrado" });
        }

        await resultado.destroy();
        res.status(200).json({ message: "Género eliminado con éxito" });
    } catch (error) {
        res.status(500).json({
            message: "Error al eliminar el género",
            error: error.message,
        });
    }
};

export const patchGenero = async (req, res) => {
    const { id } = req.params;
    const { nombre , url} = req.body
    try {
        //me tiene que pasar si o si el genero
        if (!nombre) {
            return res
                .status(400)
                .json({ message: "El campo nombre de género es obligatorio" });
        }
        const resultado = await buscarGeneroById(id);
        //si no lo encuentra me retorna 404
        if (!resultado) {
            return res.status(404).json({ message: "Género no encontrado" });
        }
        resultado.nombre = nombre;// Asigna el nuevo nombre del género
        resultado.url =url;
        await resultado.save(); // Guarda los cambios

        return res.status(200).json({
            message: "Género actualizado con éxito",
            genero: resultado,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al actualizar el género",
            error: error.message,
        });
    }
};
