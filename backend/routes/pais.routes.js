import { Router } from "express";
import {
    getPaises,
    getPaisById,
    createPais,
    deletePais,
    updatePais,
} from "../controllers/pais.controller.js";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();

router.get("/paises", getPaises);

router.get("/paises/:id",adminToken , getPaisById);
router.post("/paises",adminToken , createPais);
router.delete("/paises/:id",adminToken , deletePais);
router.patch("/paises/:id",adminToken , updatePais);

export default router;
