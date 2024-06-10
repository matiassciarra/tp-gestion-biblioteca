import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Browser router permite usar las rutas dentro de la App
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
