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
// Crear una instancia del navegador

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<NavBar />}>
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
                        path="crearOModificar"
                        element={<CrearOActualizar />}
                    ></Route>
                    <Route
                        path=":id"
                        loader={({ params }) => getLibro(params.id)}
                        element={<OneLibro />}
                    ></Route>
                </Route>

                <Route path="*" element={<h1>hola</h1>}></Route>
            </Route>
        )
    );
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}
