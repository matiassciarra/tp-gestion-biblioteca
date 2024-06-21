import { z } from "zod";

import bycript from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";

import Usuario from "../database/models/Usuario.model.js";
import { TipoUsuario } from "../database/models/TipoUsuario.js";
//register

const registerSchema = z.object({
    nombre: z
        .string()
        .min(2, { message: "Nombre debe tener al menos 2 caracteres" }),
    apellido: z
        .string()
        .min(2, { message: "Apellido debe tener al menos 2 caracteres" }),
    username: z
        .string()
        .min(4, { message: "Username debe tener entre 4 y 30 caracteres" })
        .max(30),
    password: z
        .string()
        .min(8, { message: "Password debe tener al menos 8 caracteres" }),
    correo: z
        .string()
        .email({ message: "Correo debe ser una dirección válida" }),
    id_pais: z.number({ message: "ID del país debe ser un número" }),
    url: z
        .string()
        .url({ message: "URL debe ser una dirección válida" })
        .optional(),
});

export const register = async (req, res) => {
    try {
        const { nombre, apellido, username, password, correo, id_pais, url } =
            registerSchema.parse(req.body);

        const passwordHashed = await bycript.hash(password, 10);
        const newUser = await Usuario.create({
            nombre,
            apellido,
            username,
            password: passwordHashed,
            correo,
            id_pais,
            url,
        });
        const tipoUsuario = await TipoUsuario.findByPk(newUser.id_tipo_usuario);
        const token = await createAccessToken({
            username: newUser.username,
            id: newUser.id_usuario,
            rol: tipoUsuario.nombre_tipo_usuario,
        });
        res.cookie("token", token).json({
            username: newUser.username,
            id: newUser.id_usuario,
            rol: tipoUsuario.nombre_tipo_usuario,
        });
    } catch (error) {
        if (error.errors) {
            res.status(400).send({
                message: "error al crear usuario",
                error: error.errors.map((er) => er.message),
            });
        } else {
            res.status(500).send({
                message: "error desconocido",
                error: error.message,
            });
        }
    }
};
//login
export const login = async (req, res) => {
    try {
        const { correo, password } = req.body;
        const userFound = await Usuario.findOne({
            where: {
                correo,
            },
        });
        if (!userFound)
            return res.status(404).json({ message: "usuario no encontrado" });
        const isMatch = await bycript.compare(password, userFound.password);
        if (!isMatch)
            return res.status(401).json({ message: "contraseña incorrecta" });
        const tipoUsuario = await TipoUsuario.findByPk(
            userFound.id_tipo_usuario
        );
        const token = await createAccessToken({
            username: userFound.username,
            id: userFound.id_usuario,
            rol: tipoUsuario.nombre_tipo_usuario,
        });
        res.cookie("token", token).json({
            username: userFound.username,
            id: userFound.id_usuario,
            rol: tipoUsuario.nombre_tipo_usuario,
        });
    } catch (error) {
        res.status(500).send({
            message: "error al autenticarse",
            error: error.message,
        });
    }
};
