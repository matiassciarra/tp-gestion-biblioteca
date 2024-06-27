import { Router } from "express";
import { getImages } from "../controllers/imagen.controller.js";
const router = Router();

router.get('/file',getImages)

export default router;