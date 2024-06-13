import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Pais } from "./Pais.model.js"
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
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado_usuario: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    id_pais: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_tipo_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  //comando opcionales
  {
        sequelize,
        paranoid: true,
        timestamps: true,
  }
);
// Pais tiene muchos usuarios, y usario tiene un pais
Pais.hasMany(Usuario, { foreignKey: 'id_pais' });
Usuario.belongsTo(Pais, { foreignKey: 'id_pais' });

TipoUsuario.hasMany(Usuario, { foreignKey: 'id_tipo_usuario' });
Usuario.belongsTo(TipoUsuario, { foreignKey: 'id_tipo_usuario' });



export default Usuario