import { Router } from "express";
import {
    getGeneros,
    getGeneroById,
    createGenero,
    deleteGenero,
    patchGenero,
} from "../controllers/genero.controller.js";

const router = Router();

router.get("/generos", getGeneros);
router.get("/generos/:id", getGeneroById);
router.post("/generos", createGenero);
router.patch("/generos/:id", patchGenero);
router.delete("/generos/:id", deleteGenero);

export default router;
