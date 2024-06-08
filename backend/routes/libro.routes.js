import { Router } from "express";
import { CreateLibro } from "../controllers/libro.controllers.js";
const router = Router()

router.post('/libros',CreateLibro)

export default router