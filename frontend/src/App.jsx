import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

import { NavBar } from "./components/generales/NavBar";
import { Navigate } from "react-router-dom";
<<<<<<< HEAD
import { HomeScreen } from "./pages/HomeScreen";
import {
    TodoLibros,
    OneLibro,
    PantallaMainLibro,
} from "./pages/Libros/exportLibros";
import { AutoresMain, AllAutores, OneAutor } from "./pages/Autores/Autores";
function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeScreen />}></Route>
                <Route path="/libros/*" element={<PantallaMainLibro />}>
                    <Route index element={<TodoLibros />} />
                    <Route path={":id"} element={<OneLibro />} />
                </Route>
                <Route path="/autores/*" element={<AutoresMain />}>
                    <Route index element={<AllAutores />} />
                    <Route path={":id"} element={<OneAutor />} />
=======
import {HomeScreen} from './pages/HomeScreen'
import {TodoLibros,OneLibro,PantallaMainLibro} from "./pages/Libros/exportLibros";
import {AutoresMain , AllAutores,OneAutor} from "./pages/Autores/Autores"
import { getAllAutores , getAutor} from "./service/autores";

// Crear una instancia del navegador

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<NavBar/>}>
            <Route path='autores/*' element={<AutoresMain/>} >
                <Route index element={<AllAutores/>} loader={getAllAutores}/>
                <Route path=':id' loader={({ params }) => getAutor(params.id)} element={<OneAutor/>}/>
            </Route>
            <Route path='*' element={<h1>hola</h1>}></Route>
          </Route>
        )
      )
    return (
        <>
        <RouterProvider router={router} />
        </>
    )
}
    /*
    return (
        <RouterProvider router={browser}>
            <NavBar/>
            <Routes>
                <Route path="/" element={ <HomeScreen/>}></Route>

                <Route
                        path="/libros/*"
                        element={<PantallaMainLibro/>}
                    >
                        <Route index element={<TodoLibros/>}/>
                        <Route path={":id"} element={<OneLibro/>}/>
                </Route>
                <Route
                    path="/autores/*"
                    element={<AutoresMain/>}
                >
                    <Route index element={<AllAutores/>} loader={getAllAutores}/>
                    <Route path={":id"} element={<OneAutor/>}/>
>>>>>>> 17a4bec16e2a5f391063b6295b5d2deac5f5ee8c
                </Route>

                <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
        </RouterProvider>
    );
}

export default App;
*/