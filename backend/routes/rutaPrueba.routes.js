import { Router } from "express";
import { getPruebas, createPrueba } from "../controllers/prueba.controllers.js";

const router = Router();

router.get("/recurso", getPruebas);
router.get("/recurso/:id");
router.post("/recurso", createPrueba);
router.put("/recurso/:id");
router.delete("/recurso/:id");

export default router;
