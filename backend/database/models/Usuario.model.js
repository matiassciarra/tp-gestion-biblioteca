import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Pais } from "./Pais.model.js";
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
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_pais:{
      type: DataTypes.INTEGER
    },
    url:{
      type:DataTypes.STRING,
      allowNull: true
    }
  },
  //comando opcionales
  {
    timestamps: false,
  }
);
// Pais tiene muchos usuarios, y usario tiene un pais
Pais.hasMany(Usuario, { foreignKey: 'id_pais' });
Usuario.belongsTo(Pais, { foreignKey: 'id_pais' });


export default  Usuario 