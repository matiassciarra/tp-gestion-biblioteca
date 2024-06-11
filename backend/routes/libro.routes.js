import { Router } from "express";
<<<<<<< HEAD
import {
    CreateLibro,
    getLibro,
    shemaIdLibro,
    getLibroId,
    updateLibro,
    deleteLibro,
    getLibrosPorGenero,
} from "../controllers/libro.controllers.js";
import { z } from "zod";
=======
import { CreateLibro, getLibro,shemaIdLibro, getLibroId, updateLibro,deleteLibro } from "../controllers/libro.controllers.js";

>>>>>>> 94a4caa116b64c2241645298692f95fc41971f38

const router = Router();

router.post("/libros", CreateLibro);
router.get("/libros", getLibro);
//todo: ACA VAN LOS PARAMETROS QUE SE TIENE QUE BUSCAR POR ID
//se ejecuta primero para ver si tiene el id y luego ejecuta la ruta
router.get("/libros/generos", getLibrosPorGenero);
router.get("/libros/:id", shemaIdLibro, getLibroId);
router.patch("/libros/:id", shemaIdLibro, updateLibro);
router.delete("/libros/:id", shemaIdLibro, deleteLibro);

export default router;
