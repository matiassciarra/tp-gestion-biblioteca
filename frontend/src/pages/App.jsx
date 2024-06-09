import { NavBar } from "../components/generales/NavBar";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { AutoresScreen } from "./AutoresScreen";
import { LibrosScreen } from "./Libros/mainLibros";
import { UsuariosScreen } from "./UsuariosScreen";
import { PrestamosScreen } from "./PrestamosScreen";
import { Navigate } from "react-router-dom";
import AllLibros from "./Libros/AllLibros";
import Libro from "./Libros/Libro";
import { obtenerLibros } from "../service/libros";
function App() {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route
                    path="/libros/*"
                    element={<LibrosScreen/>}
                >
                    <Route index element={<AllLibros/>} 
                    loader={obtenerLibros}
                    />
                    <Route path={":id"} element={<Libro/>}/>
                </Route>
                <Route
                    path="/autores"
                    element={<AutoresScreen></AutoresScreen>}
                ></Route>
                <Route
                    path="/usuarios"
                    element={<UsuariosScreen></UsuariosScreen>}
                ></Route>
                <Route
                    path="/prestamos"
                    element={<PrestamosScreen></PrestamosScreen>}
                ></Route>
                <Route path="/*" element={<Navigate to={"/"} />}></Route>
            </Routes>
        </>
    );
}

export default App;
