import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";
import { LibrosScreen } from "./pages/LibrosScreen";
import { AutoresScreen } from "./pages/AutoresScreen";
import { UsuariosScreen } from "./pages/UsuariosScreen";
import { PrestamosScreen } from "./pages/PrestamosScreen";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/libros" element={<LibrosScreen />} />
                <Route path="/autores" element={<AutoresScreen />} />
                <Route path="/usuarios" element={<UsuariosScreen />} />
                <Route path="/prestamos" element={<PrestamosScreen />} />
                <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;
