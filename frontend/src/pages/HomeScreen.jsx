import { useEffect } from "react";

export const HomeScreen = () => {
    useEffect(() => {
        document.title = "Gestionar biblioteca";
    }, []);
    return (
        <>
            <h1>Pagina principal</h1>
        </>
    );
};
