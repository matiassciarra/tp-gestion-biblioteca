import { useEffect } from "react";

export const UsuariosScreen = () => {
    useEffect(() => {
        document.title = "Usuarios";
    }, []);

    return (
        <>
            <h1>Usuarios</h1>
        </>
    );
};
