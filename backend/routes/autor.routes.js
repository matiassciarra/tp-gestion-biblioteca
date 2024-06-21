import { Router } from "express";
import {
    getAutores,
    getAutorPorId,
    createAutor,
    deleteAutor,
    updateAutor,
} from "../controllers/autor.controller.js";

const router = Router();

router.get("/autores", getAutores);
router.get("/autores/:id", getAutorPorId);
router.post("/autores", createAutor);
router.delete("/autores/:id", deleteAutor);
router.patch("/autores/:id", updateAutor);

export default router;
