import { Router } from "express";
import {
    createTipoUsuario,
    getTiposUsuarios,
} from "../controllers/tipo_usuario.controller.js";

const router = Router();

router.get("/tipoUsuarios", getTiposUsuarios);
router.post("/tipoUsuarios", createTipoUsuario);

export default router;
