import { Router } from "express";
import {
    getAutores,
    getAutorPorId,
    createAutor,
    deleteAutor,
    updateAutor,
} from "../controllers/autor.controller.js";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();

router.get("/autores", getAutores);
router.get("/autores/:id", getAutorPorId);
router.post("/autores",adminToken, createAutor);
router.delete("/autores/:id",adminToken, deleteAutor);
router.patch("/autores/:id",adminToken, updateAutor);

export default router;
