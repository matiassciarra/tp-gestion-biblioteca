import { NavBar } from "../components/generales/NavBar";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { AutoresScreen } from "./AutoresScreen";
import { LibrosScreen } from "./LibrosScreen";
import { UsuariosScreen } from "./UsuariosScreen";
import { PrestamosScreen } from "./PrestamosScreen";
import { Navigate } from "react-router-dom";

function App() {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path="/" element={<HomeScreen></HomeScreen>}></Route>
                <Route
                    path="/libros"
                    element={<LibrosScreen></LibrosScreen>}
                ></Route>
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
