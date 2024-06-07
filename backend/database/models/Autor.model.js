import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

sequelize.define("modeloPrueba", {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timestamps: false,
});
