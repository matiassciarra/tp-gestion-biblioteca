import { Router } from "express";
import { getPaises, getPaisById, createPais, deletePais, modificarPais } from "../controllers/pais.controllers.js"

const router = Router()

router.get("/paises", getPaises);
router.get("/paises/:id", getPaisById);
router.post("/paises", createPais);
router.delete("/paises/:id", deletePais);

export default router