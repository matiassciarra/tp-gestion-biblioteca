import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Pais = sequelize.define(
    "País",
    {
        id_pais: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
)