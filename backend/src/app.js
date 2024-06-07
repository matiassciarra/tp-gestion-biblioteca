// Aca se crea la app con express
import express from "express";
import morgan from "morgan"; //Es par

//aca se importa las rutas
import rutaPrueba from "../routes/rutaPrueba.routes.js";
import Genero from '../routes/genero.routes.js'

const app = express();

//Middlewares
app.use(express.json()); //Es para interpretar los JSON
app.use("/api/", rutaPrueba);
app.use("/api/", Genero);

app.use(morgan("dev")); //Morgan es para ver en consola las peticiones http e informacion

export default app;
