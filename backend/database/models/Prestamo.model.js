import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import Libro from "./Libro.model.js";
import Usuario from "./Usuario.model.js";
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
            type: DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: DataTypes.NOW,
        },
        fecha_devolucion: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                esFechaFutura(value) {
                    if (value <= new Date()) {
                        throw new Error(
                            "La fecha de devolucion debe ser mayor a la fecha actual"
                        );
                    }
                },
            },
        },
        fecha_devolucion_real:{
            type:DataTypes.DATEONLY,
            allowNull: true,
            defaultValue: null
        }
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

export default Prestamo;
