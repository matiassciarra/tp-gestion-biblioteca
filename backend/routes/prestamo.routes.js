import { Router } from "express";
import {
    getPrestamos,
    getPrestamoPorId,
    updatePrestamo,
    deletePrestamo,
    createPrestamo,
    getPrestamosUsuario,
    devolverLibro
} from "../controllers/prestamo.controller.js";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();
//ruta para que pueda realizar un prestamo o una consulta por sus id

router.get('/prestamos/me',getPrestamosUsuario)
//prestamo en particular 
router.post("/prestamos", createPrestamo);
router.post("/prestamos/:id",devolverLibro)
//ver prestamo en particular
router.get("/prestamo/:id", adminToken ,getPrestamoPorId);
router.get("/prestamos", adminToken, getPrestamos);
router.delete("/prestamos/:id", adminToken, deletePrestamo);
router.patch("/prestamos/:id", adminToken, updatePrestamo);

export default router;
