import { Router } from "express";
import { getUsers, getUserById } from "../controllers/usuario.controllers.js"

const router = Router()

router.get("/usuarios", getUsers);
router.get("/usuarios/:id", getUserById);

export default router