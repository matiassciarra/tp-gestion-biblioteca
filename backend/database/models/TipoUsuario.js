import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

export const TipoUsuario = sequelize.define('TipoUsuario',
    {
        id_tipo_usuario : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre_tipo_usuario: {
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

