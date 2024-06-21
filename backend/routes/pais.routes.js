import { Router } from "express";
import {
    getPaises,
    getPaisById,
    createPais,
    deletePais,
    updatePais,
} from "../controllers/pais.controller.js";

const router = Router();

router.get("/paises", getPaises);
router.get("/paises/:id", getPaisById);
router.post("/paises", createPais);
router.delete("/paises/:id", deletePais);
router.patch("/paises/:id", updatePais);

export default router;
