import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Genero = sequelize.define("Autor", {
  id_genero: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
