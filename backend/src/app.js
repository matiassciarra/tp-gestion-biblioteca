// Aca se crea la app con express
import express from "express";
import morgan from "morgan"; //Es par
import rutaAutores from "../routes/autor.routes.js";
import rutaUsers from "../routes/usuario.routes.js";
import rutaPaises from "../routes/pais.routes.js";
import rutaGeneros from "../routes/genero.routes.js"

const app = express();

//Middlewares
app.use(express.json()); //Es para interpretar los JSON
app.use("/api", rutaAutores);
app.use("/api", rutaUsers);
app.use("/api", rutaPaises);
app.use("/api",rutaGeneros)
app.use(morgan("dev")); //Morgan es para ver en consola las peticiones http e informacion

export default app;
