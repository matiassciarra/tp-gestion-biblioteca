// Aca se crea la app con express
import rutaPrueba from "../routes/rutaPrueba.routes.js";
import express from "express";
import morgan from "morgan"; //Es par

const app = express();

//Middlewares
app.use(express.json()); //Es para interpretar los JSON
app.use("/api/", rutaPrueba);
app.use(morgan("dev")); //Morgan es para ver en consola las peticiones http e informacion

export default app;
