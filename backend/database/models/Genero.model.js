import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Genero = sequelize.define("Genero", {
  id_genero: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
},
},
//comando opcionales
{
    sequelize,
    paranoid: true,
    timestamps: true,
}
);
