// Aca se crea la app con express
import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
//importacion de rutas
import rutaAutores from "../routes/autor.routes.js";
import rutaUsers from "../routes/usuario.routes.js";
import rutaPaises from "../routes/pais.routes.js";
import rutaGeneros from "../routes/genero.routes.js";
import rutaLibro from "../routes/libro.routes.js";
import rutaPrestamos from "../routes/prestamo.routes.js";
import rutaAuth from "../routes/auth.routes.js";
import rutaTiposUsuario from "../routes/tipo_usuario.js";

const app = express();
//habilitacion
app.use(cors());
//Middlewares
app.use(express.json()); //Es para interpretar los JSON
app.use(cookieParser());

app.use(morgan("dev")); //Morgan es para ver en consola las peticiones http e informacion
app.use("/api", rutaAuth);
app.use("/api", rutaTiposUsuario);
app.use("/api", rutaAutores);
app.use("/api", rutaUsers);
app.use("/api", rutaPaises);
app.use("/api", rutaGeneros);
app.use("/api", rutaLibro);
app.use("/api", rutaPrestamos);

export default app;
