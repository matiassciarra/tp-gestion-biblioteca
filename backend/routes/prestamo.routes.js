import { Router } from "express";
import {
    getPrestamos,
    getPrestamoPorId,
    updatePrestamo,
    deletePrestamo,
    createPrestamo,
} from "../controllers/prestamo.controller.js";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();
router.use(adminToken)
router.get("/prestamos",  getPrestamos);
router.get("/prestamos/:id", getPrestamoPorId);
router.post("/prestamos", createPrestamo);
router.delete("/prestamos/:id", deletePrestamo);
router.patch("/prestamos/:id", updatePrestamo);

export default router;
