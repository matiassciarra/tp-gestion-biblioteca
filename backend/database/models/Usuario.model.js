import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Usuario = sequelize.define("Usuario", {
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
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    timestamps: false,
})
