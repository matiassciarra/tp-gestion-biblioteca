import { Router } from "express";
import { register, login, verify,logout } from "../controllers/auth.controller.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get('/logout',logout)
router.get("/verify", verify);

export default router;
