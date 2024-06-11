import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'

import { NavBar } from "./components/generales/NavBar";
import { Navigate } from "react-router-dom";
import {HomeScreen} from './pages/HomeScreen'
import {TodoLibros,OneLibro,PantallaMainLibro} from "./pages/Libros/exportLibros";
import {AutoresMain , AllAutores,OneAutor} from "./pages/Autores/Autores"
import { getAllAutores , getAutor} from "./service/autores";
//TODO:aca van las importacions de genero
import { UnGenero,AllGeneros,Genero } from './pages/Genero/Genero';
import { getAllGenero } from './service/generos';
// Crear una instancia del navegador

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<NavBar/>}>
            <Route path='autores/*' element={<AutoresMain/>} >
                <Route index element={<AllAutores/>} loader={getAllAutores}/>
                <Route path=':id' loader={({ params }) => getAutor(params.id)} element={<OneAutor/>}/>
            </Route>
            <Route path='generos/*' element={<Genero/>}>
                <Route index loader={getAllGenero} element={<AllGeneros/>}/>
                <Route path=':nombreGenero' element={< UnGenero/>} />
            </Route>
            <Route path='*' element={<h1>hola</h1>}></Route>

          </Route>
        )
      )
    return (
        
        <RouterProvider router={router} />
        
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
                </Route>
                
                <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
        </RouterProvider>
    );
}

export default App;
*/