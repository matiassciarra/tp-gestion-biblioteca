import { z } from "zod";
import bcrypt from "bcrypt";
import { createAccessToken } from "../libs/jwt.js";
import Usuario from "../database/models/Usuario.model.js";
import { TipoUsuario } from "../database/models/TipoUsuario.js";
import { Sequelize, Op } from "sequelize";
import jwt from "jsonwebtoken";
import { PALABRA_SECRETA } from "../src/config.js";
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
            req.body; //Traemos los datos del req.body
        registerSchema.parse(req.body); //Validamos los datos traidos

        const userFound = await Usuario.findOne({
            where: { [Op.or]: [{ correo }, { username }] },
        });
        if (userFound)
            return res.status(400).send("El email o el correo ya esta en uso");

        const passwordHashed = await bcrypt.hash(password, 10); //Encriptamos el password
        const newUser = await Usuario.create({
            nombre,
            apellido,
            username,
            password: passwordHashed,
            correo,
            id_pais,
            url,
        }); // Insertamos en la Base de datos con la password hasheada
        const tipoUsuario = await TipoUsuario.findByPk(newUser.id_tipo_usuario); //Buscamos el tipo de usuario o rol del usuario
        const token = await createAccessToken({
            username: newUser.username,
            id: newUser.id_usuario,
            rol: tipoUsuario.nombre_tipo_usuario, //Creamos un token y guardamos el username, id, y rol
        });
        res.cookie("token", token).json({
            username: newUser.username,
            id: newUser.id_usuario,
            rol: tipoUsuario.nombre_tipo_usuario, //Guardamos el token en una cookie
        });
    } catch (error) {
        if (error.errors) {
            res.status(400).send({
                message: "error al crear usuario",
                error: error.errors.map((er) => er.message), //mostramos los errores que existieron en las validaciones
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
        const isMatch = await bcrypt.compare(password, userFound.password);
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

export const verify = async (req, res) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: "Inautorizado" });

    jwt.verify(token, PALABRA_SECRETA, async (err, user) => {
        if (err) return res.status(401).json({ message: "Inautorizado" });

        const userFound = await Usuario.findOne({
            where: { id_usuario: user.id },
        });

        if (!userFound)
            return res.status(401).json({ message: "Inautorizado" });

        const tipoUsuario = await TipoUsuario.findByPk(
            userFound.id_tipo_usuario
        );

        return res.json({
            id: userFound.id_usuario,
            username: userFound.username,
            rol: tipoUsuario.nombre_tipo_usuario,
        });
    });
};
