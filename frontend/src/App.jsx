import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import { NavBar } from "./components/generales/NavBar";
import { AutoresMain, AllAutores, OneAutor } from "./pages/Autores/Autores";
import { getAllAutores, getAutor } from "./service/autores";
import { getAllLibros, getLibro } from "./service/libros";
import {
    OneLibro,
    TodoLibros,
    PantallaMainLibro,
    CrearOActualizar,
} from "./pages/Libros/exportLibros";

import { UnGenero, AllGeneros, Genero } from "./pages/Genero/Genero";
import { getAllGenero } from "./service/generos";
<<<<<<< HEAD
// Crear una instancia del navegador

export function App() {
=======
// importar elementos de home
import { Home,RegistrarUsuario } from "./pages/auth/auth";
export default function App() {
>>>>>>> e3838f673fa86645ea46007ad12b5946d6ff666c
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<NavBar />}>
                <Route index element={<Home/>}/>
                <Route path="registrar" element={<RegistrarUsuario/>} />
                <Route path="autores/*" element={<AutoresMain />}>
                    <Route
                        index
                        element={<AllAutores />}
                        loader={getAllAutores}
                    />
                    <Route
                        path=":id"
                        loader={({ params }) => getAutor(params.id)}
                        element={<OneAutor />}
                    />
                </Route>

                <Route path="libros/*" element={<PantallaMainLibro />}>
                    <Route
                        index
                        element={<TodoLibros />}
                        loader={getAllLibros}
                    ></Route>
                    <Route
                        path="crearOModificar/:id?"
                        loader={({ params }) =>
                            params.id ? getLibro(params.id) : null
                        }
                        element={<CrearOActualizar />}
                    ></Route>
                    <Route
                        path="libro/:id"
                        loader={({ params }) => getLibro(params.id)}
                        element={<OneLibro />}
                    ></Route>
                </Route>
                <Route path="generos/*" element={<Genero />}>
                    <Route
                        index
                        loader={getAllGenero}
                        element={<AllGeneros />}
                    />
                    <Route path=":nombreGenero" element={<UnGenero />} />
                </Route>

                <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
