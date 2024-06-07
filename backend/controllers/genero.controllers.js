import { Genero } from "../database/models/Genero.model.js"

//llamada por genero
const buscarGeneroById =async (id) => {
    return await Genero.findByPk(id)
}

//rutas llamadas
export const getGeneros = async(req,res) =>{
    res.send(await Genero.findAll())
}

export const getGeneroById = async(req,res)=>{
    const {id}  = req.params
    const resultado = await buscarGeneroById(id)
    if (!resultado) {
        //mandar un mensaje de error 404 de no encontrado
        return res.status(404).json({ message: 'Género no encontrado' });
    }
    return res.send(resultado)
}

export const createGenero = async (req, res) => {
    try {
      const { genero } = req.body;
      if (!genero) {
        return res.status(400).json({ message: 'El campo género es obligatorio' });
      }
      // Verificar si el género ya existe
      const generoExistente = await Genero.findOne({ where: { nombre: genero } });
      if (generoExistente) {
        return res.status(409).json({ message: 'El género ya existe' });
      }
  
      // Crear el nuevo género
      const nuevoGenero = await Genero.create({ nombre: genero });
      res.status(201).json(nuevoGenero);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear el género', error: error.message });
    }
  };

  export const deleteGenero = async (req, res) => {
    const { id } = req.params;
  
    try {
      const resultado = await buscarGeneroById(id);
      if (!resultado) {
        return res.status(404).json({ message: 'Género no encontrado' });
      }
  
      await resultado.destroy();
      res.status(200).json({ message: 'Género eliminado con éxito' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el género', error: error.message });
    }
  };

  export const patchGenero = async (req, res) => {
    const { id } = req.params;
    const { genero } = req.body;
    try {
        //me tiene que pasar si o si el genero
      if (!genero) {
        return res.status(400).json({ message: 'El campo género es obligatorio' });
      }
      const resultado = await buscarGeneroById(id);
      //si no lo encuentra me retorna 404
      if (!resultado) {
        return res.status(404).json({ message: 'Género no encontrado' });
      }
      resultado.nombre = genero; // Asigna el nuevo nombre del género
      await resultado.save(); // Guarda los cambios
  
      return res.status(200).json({ message: 'Género actualizado con éxito', genero: resultado });
    } catch (error) {
      res.status(500).json({ message: 'Error al actualizar el género', error: error.message });
    }
  };