import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import Libro from "./Libro.model.js";
import  Usuario  from "./Usuario.model.js";
import { TipoPrestamo } from "./TipoPrestamo.model.js";
const Prestamo = sequelize.define(
    "Prestamo",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_libro: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_usuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_prestamo: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        fecha_devolucion: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        estado: {
            type:DataTypes.BOOLEAN,
            defaultValue: true
        },
        id_tipo_prestamo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    //comando opcionales
    {
        sequelize,
        paranoid: true,
        timestamps: true,
    }
);

Prestamo.belongsTo(Libro, { foreignKey: "id_libro" });
Libro.hasMany(Prestamo, { foreignKey: "id_libro" });

Prestamo.belongsTo(Usuario, { foreignKey: "id_usuario" });
Usuario.hasMany(Prestamo, { foreignKey: "id_usuario" });

Prestamo.belongsTo(TipoPrestamo, { foreignKey: "id_tipo_prestamo" });
TipoPrestamo.hasMany(Prestamo, { foreignKey: "id_tipo_prestamo" });



export default TipoPrestamo
