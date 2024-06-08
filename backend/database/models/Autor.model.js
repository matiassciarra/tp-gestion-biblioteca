import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Pais } from "./Pais.model.js";

const Autor = sequelize.define(
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
        id_pais:{
            type: DataTypes.INTEGER
        }
    },
    //comando opcionales
    {
        timestamps: false,
    }
);
// Pais tiene muchos Autor, y Autor tiene un pais
Pais.hasMany(Autor, { foreignKey: 'id_pais' });
Autor.belongsTo(Pais, { foreignKey: 'id_pais' });

export default Autor