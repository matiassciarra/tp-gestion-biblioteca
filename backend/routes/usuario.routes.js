import { Router } from "express";
import {
    getUsers,
    getUserById,
    createUsuario,
    deleteUsuario,
    updateUsuario,
} from "../controllers/usuario.controller.js";

const router = Router();

router.get("/usuarios", getUsers);
router.get("/usuarios/:id", getUserById);
router.post("/usuarios", createUsuario);
router.delete("/usuarios/:id", deleteUsuario);
router.patch("/usuarios/:id", updateUsuario);

export default router;
