import jwt from "jsonwebtoken";
import { PALABRA_SECRETA } from "../src/config.js";

export const authRequired = (req, res, next) => {
    const { token } = req.cookies;
    if (!token)
        return res
            .status(401)
            .json({ message: "No hay token, no estas autorizado" });
    jwt.verify(token, PALABRA_SECRETA, (err, user) => {
        if (err) return res.status(403).json({ message: "Invalid token" });
        req.user = user;
        next();
    });
};
