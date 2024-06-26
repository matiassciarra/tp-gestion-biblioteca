import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Pais } from "./Pais.model.js";
import { TipoUsuario } from "./TipoUsuario.js";

const Usuario = sequelize.define(
    "Usuario",
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "El correo debe ser requerido" },
                len: {
                    args: [4, 30],
                    msg: "El nombre de usuario debe ser mínimo 4 caracteres y máximo 30 caracteres",
                },
            },
            unique: {
                args: true,
                msg: "ya existe un nombre de usuario con el mismo nombre",
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "La contraseña debe ser requerida" },
            },
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "El correo debe ser requerido" },
                isEmail: { msg: "El formato de Correo es incorrecto" },
            },
            unique: { args: true, msg: "ya existe un correo registrado" },
        },
        id_pais: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_tipo_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        url: {
            type: DataTypes.STRING,
            defaultValue:
                "https://facilitylogin.medwiserinc.com/img/generic_avatar.jpg",
            validate: {
                isUrl: { msg: "El formato de la URL es incorrecto" },
            },
        },
    },
    // opciones adicionales
    {
        // hooks para poder eliminar un espaciado si el usuario lo puso
        paranoid: true,
        timestamps: true,
    }
);

// Pais tiene muchos usuarios, y usuario tiene un país
Pais.hasMany(Usuario, { foreignKey: "id_pais" });
Usuario.belongsTo(Pais, { foreignKey: "id_pais" });

TipoUsuario.hasMany(Usuario, { foreignKey: "id_tipo_usuario" });
Usuario.belongsTo(TipoUsuario, { foreignKey: "id_tipo_usuario" });

export default Usuario;
