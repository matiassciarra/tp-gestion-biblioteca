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
            allowNull: true,
        },
        url_imagen: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        id_pais: {
            type: DataTypes.INTEGER,
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
// Pais tiene muchos Autor, y Autor tiene un pais
Pais.hasMany(Autor, { foreignKey: "id_pais" });
Autor.belongsTo(Pais, { foreignKey: "id_pais" });

export default Autor;
