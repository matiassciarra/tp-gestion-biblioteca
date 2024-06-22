import { Router } from "express";
import {
    getPrestamos,
    getPrestamoPorId,
    updatePrestamo,
    deletePrestamo,
    createPrestamo,
} from "../controllers/prestamo.controller.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = Router();

router.get("/prestamos", authRequired, getPrestamos);
router.get("/prestamos/:id", authRequired, getPrestamoPorId);
router.post("/prestamos", authRequired, createPrestamo);
router.delete("/prestamos/:id", authRequired, deletePrestamo);
router.patch("/prestamos/:id", authRequired, updatePrestamo);

export default router;
