import { Router } from "express";
import {
    getAutores,
    getAutorPorId,
    createAutor,
    deleteAutor,
} from "../controllers/autor.controllers.js";

const router = Router();

router.get("/autores", getAutores);
router.get("/autores/:id", getAutorPorId);
router.post("/autores", createAutor);
router.delete("/autores/:id", deleteAutor);
router.put("/autores/:id", () => {});

export default router;
