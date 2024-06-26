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
import { Home } from "./pages/auth/auth.js";
import { FormularioRegistro } from "./pages/auth/registrarUsuario.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ProtectedRoute } from "./components/generales/ProtectedRoute.jsx";
import { SolicitarPrestamo } from "./pages/prestamos/solicitarPrestamo.jsx";

import {
    OneLibro,
    TodoLibros,
    PantallaMainLibro,
    CrearOActualizar,
} from "./pages/Libros/exportLibros";

import { UnGenero, AllGeneros, Genero } from "./pages/Genero/Genero";
import { getAllGenero } from "./service/generos";

import { getAllUsuarios, getUsuario } from "./service/usuarios.js";
import { AllUsuarios } from "./pages/Usuarios/AllUsuarios.jsx";
import { Usuario } from "./pages/Usuarios/PantallaUsuario.jsx";
import { UnUsuario } from "./pages/Usuarios/UnUsuario.jsx";
// Crear una instancia del navegador

export function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path="register" element={<FormularioRegistro />} />
                <Route element={<ProtectedRoute />}>
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
                    <Route
                        path="nuevoPrestamo/:id"
                        element={<SolicitarPrestamo />}
                        loader={({ params }) => getLibro(params.id)}
                    ></Route>
                    <Route path="usuarios/*" element={<Usuario />}>
                        <Route
                            index
                            loader={getAllUsuarios}
                            element={<AllUsuarios />}
                        />
                        <Route
                            path=":id"
                            loader={({ params }) => getUsuario(params.id)}
                            element={<UnUsuario option={1} />}
                        />
                        <Route
                            path="modificar/:id"
                            loader={({ params }) => getUsuario(params.id)}
                            element={<UnUsuario option={2} />}
                        />
                    </Route>
                </Route>
                <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Route>
        )
    );
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}
