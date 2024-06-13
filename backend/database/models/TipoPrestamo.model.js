import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const TipoPrestamo = sequelize.define('TipoPrestamo',
    {
        id_prestamo : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre_prestamo: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        paranoid: true,
        timestamps: true,
    }
)