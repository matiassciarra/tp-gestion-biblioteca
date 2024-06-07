import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Autor = sequelize.define(
    "Autor",
    {
        id_autor: {
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
        biografia: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        fecha_nacimiento: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    //comando opcionales
    {
        timestamps: false,
    }
);
