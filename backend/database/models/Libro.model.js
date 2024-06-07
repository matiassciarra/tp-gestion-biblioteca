import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const Libro = sequelize.define("Libro", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_genero: {
    type: DataTypes.INTEGER,
    references: {
      model: "Genero",
      key: "id_genero",
    },
  },
  id_autor: {
    type: DataTypes.INTEGER,
    references: {
      model: "Autor",
      key: "id_autor",
    },
    allowNull: false,
  },
  fecha_publicacion: {
    type: DataTypes.DATE,
  },
  url:{
    type:DataTypes.STRING,
    allowNull: true,
  },
  
},
{
    timestamps: false,
}
);
