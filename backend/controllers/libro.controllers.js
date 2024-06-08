import Libro from "../database/models/Libro.model.js";
import { z } from "zod";



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
        return res.status(400).json({ error: validationResult.error.errors });
    }

    const { titulo, id_genero, id_autor, fecha_publicacion, url, estado_libro } = validationResult.data;
    
    try {
        const nuevoLibro = await Libro.create({
          titulo,
          id_genero,
          id_autor,
          fecha_publicacion: new Date(fecha_publicacion),
          url: url || null,
          estado_libro: estado_libro !== undefined ? estado_libro : true,
        });
    
        return res.status(201).json(nuevoLibro);
      } catch (error) {
        console.error("Error al crear el libro:", error);
        res.status(500).json({ error: "Error al crear el libro." });
      }
};
