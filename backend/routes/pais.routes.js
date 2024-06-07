import { Router } from "express";
import { getPaises, getPaisById } from "../controllers/pais.controllers.js"

const router = Router()

router.get("/paises", getPaises);
router.get("/paises/:id", getPaisById);

export default router