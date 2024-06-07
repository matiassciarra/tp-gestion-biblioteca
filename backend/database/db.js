// Creamos la base de datos con sequelize

import { Sequelize } from "sequelize";

//Defino que la base se cree con sqlite y la crea dentro de la carpeta database
export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./database/datos.sqlite",
    logging: false, //Desactiva consultas SQL de sequelize en la consola
});
