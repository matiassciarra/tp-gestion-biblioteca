import { Outlet } from "react-router-dom";
export const Genero = () => {
    return (
        <>
            <h1 className="text-white tw-bold text-center">Generos Disponibles</h1>
            <Outlet />
        </>
    );
};
