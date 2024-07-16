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
    getLibrosPorFiltro,
} from "../controllers/libro.controller.js";
import { z } from "zod";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();

router.get("/libros", getLibro);
router.get("/libros/filtro", getLibrosPorFiltro);
//todo: ACA VAN LOS PARAMETROS QUE SE TIENE QUE BUSCAR POR ID
//se ejecuta primero para ver si tiene el id y luego ejecuta la ruta
router.get("/libros/porTitulo", getLibrosPorTitulo);
router.get("/libros/generos", getLibrosPorGenero);
router.get("/libros/:id", shemaIdLibro, getLibroId);

router.post("/libros", adminToken, CreateLibro);
router.patch("/libros/:id", adminToken, shemaIdLibro, updateLibro);
router.delete("/libros/:id", adminToken, shemaIdLibro, deleteLibro);

export default router;
