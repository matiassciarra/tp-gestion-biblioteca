import { useEffect } from "react";

export const AutoresScreen = () => {
    useEffect(() => {
        document.title = "Autores";
    }, []);

    return (
        <>
            <h1>Autores</h1>
        </>
    );
};
