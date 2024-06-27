import { Router } from "express";
import {
    getGeneros,
    getGeneroById,
    createGenero,
    deleteGenero,
    patchGenero,
} from "../controllers/genero.controller.js";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();

router.get("/generos", getGeneros);

router.get("/generos/:id",adminToken , getGeneroById);
router.post("/generos", adminToken ,createGenero);
router.patch("/generos/:id", adminToken , patchGenero);
router.delete("/generos/:id", adminToken , deleteGenero);

export default router;
