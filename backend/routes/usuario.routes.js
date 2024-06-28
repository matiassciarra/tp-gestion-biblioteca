import { Router } from "express";
import {
    getUsers,
    getUserById,
    createUsuario,
    deleteUsuario,
    updateUsuario,
    userMe,
    patchUsuarioMe
} from "../controllers/usuario.controller.js";
import { adminToken } from "../middlewares/adminToken.js";

const router = Router();
//crear usuario

router.get("/usuarios/me",userMe)
router.patch("/usuarios/me",patchUsuarioMe)
router.get("/usuarios", adminToken, getUsers);
router.get("/usuarios/:id", adminToken, getUserById);
router.delete("/usuarios/:id", adminToken, deleteUsuario);
router.patch("/usuarios/:id", adminToken, updateUsuario);
router.post("/usuarios", adminToken, createUsuario);


export default router;
