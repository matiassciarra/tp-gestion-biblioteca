import { Router } from "express";
import {
    getPrestamos,
    getPrestamoPorId,
    updatePrestamo,
    deletePrestamo,
    createPrestamo,
    getPrestamosUsuario
} from "../controllers/prestamo.controller.js";
import { adminToken } from "../middlewares/adminToken.js";
import { infoUser } from "../middlewares/infoUsuario.js";
const router = Router();
//ruta para que pueda realizar un prestamo o una consulta por sus id

router.get('/prestamos/me',getPrestamosUsuario)
//prestamo en particular 
router.get("/prestamo/:id", infoUser,getPrestamoPorId);
router.post("/prestamos",infoUser, createPrestamo);

router.use(adminToken)
router.get("/prestamos",  getPrestamos);
router.delete("/prestamos/:id", deletePrestamo);
router.patch("/prestamos/:id", updatePrestamo);

export default router;
