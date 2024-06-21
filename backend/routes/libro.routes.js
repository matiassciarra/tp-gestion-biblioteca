import { Router } from "express";
import {
    CreateLibro,
    getLibro,
    shemaIdLibro,
    getLibroId,
    updateLibro,
    deleteLibro,
    getLibrosPorGenero,
    getLibrosPorTitulo,
} from "../controllers/libro.controller.js";
import { z } from "zod";

const router = Router();

router.post("/libros", CreateLibro);
router.get("/libros", getLibro);
//todo: ACA VAN LOS PARAMETROS QUE SE TIENE QUE BUSCAR POR ID
//se ejecuta primero para ver si tiene el id y luego ejecuta la ruta
router.get("/libros/porTitulo", getLibrosPorTitulo);
router.get("/libros/generos", getLibrosPorGenero);
router.get("/libros/:id", shemaIdLibro, getLibroId);
router.patch("/libros/:id", shemaIdLibro, updateLibro);
router.delete("/libros/:id", shemaIdLibro, deleteLibro);

export default router;
