import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";
import { Genero } from "./Genero.model.js";
import Autor from "./Autor.model.js";

const Libro = sequelize.define(
    "Libro",
    {
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
            allowNull: false,
        },
        id_autor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fecha_publicacion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        estado_libro: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    },
    {
        sequelize,
        paranoid: true,
        timestamps: true,
    }
);
//aca defino las relaciones
// genero tiene muchos Libros, y libro tiene un genero
// Relaciones
Genero.hasMany(Libro, { foreignKey: "id_genero" });
Libro.belongsTo(Genero, { foreignKey: "id_genero" });

Autor.hasMany(Libro, { foreignKey: "id_autor" });
Libro.belongsTo(Autor, { foreignKey: "id_autor" });

export default Libro;

/* 
buscar libro y que muestre su genero

async function buscarLibroPorTitulo(titulo) {
  try {
    const libro = await Libro.findOne({
      where: { titulo: titulo },
      Buscar por genro y auro
      include: [Genero, Autor]
    });
    if (libro) {
      console.log(`Título: ${libro.titulo}`);
      console.log(`Género: ${libro.Genero.nombre}`);
      console.log(`Autor: ${libro.Autor.nombre} ${libro.Autor.apellido}`);
    } else {
      console.log('Libro no encontrado');
    }
  } catch (error) {
    console.error('Error al buscar el libro:', error);
  }
}

buscarLibroPorTitulo('El título del libro');

*/
