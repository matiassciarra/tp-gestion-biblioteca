import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components/generales/NavBar";
import { Navigate } from "react-router-dom";
import {HomeScreen} from './pages/HomeScreen'
import {TodoLibros,OneLibro,PantallaMainLibro} from "./pages/Libros/exportLibros";
import {AutoresMain , AllAutores,OneAutor} from "./pages/Autores/Autores"
function App() {
    return (
        <>
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
                    <Route index element={<AllAutores/>}/>
                    <Route path={":id"} element={<OneAutor/>}/>
                </Route>
                
                <Route path="*" element={<Navigate to={"/"} />}></Route>
            </Routes>
        </>
    );
}

export default App;
