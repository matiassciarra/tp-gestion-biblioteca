import { URL } from "./autores";

export const getAllLibros = async () => {
    const response = await fetch(`${URL}api/libros`);
    if (!response.ok) {
        throw new Error("Error al obtener libros");
    }
    const data = await response.json();

    return data;
};

export const getLibro = async (id) => {
    const response = await fetch(URL + `api/libros/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener libros");
    }
    const data = await response.json();

    return data;
};

export const getLibrosPorGenero = async (id_genero) => {
    const response = await fetch(
        `${URL}api/libros/generos?id_genero=${id_genero}`
    );
    if (!response.ok) {
        throw new Error("Error al obtener libros de ese genero");
    }
    const data = await response.json();

    return data;
};

export const getGeneros = async () => {
    const response = await fetch(`${URL}api/generos`);
    if (!response.ok) {
        throw new Error("Error al obtener generos");
    }
    const data = await response.json();

    return data;
};

export const createLibro = async (obj) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };
    const response = await fetch(URL + "api/libros", options);
    if (!response.ok) {
        throw new Error("Error al crear el libro");
    }
    const data = await response.json();

    return data;
};

export const deleteLibro = async (id) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(URL + `api/libros/${id}`, options);
    if (!response.ok) {
        throw new Error(
            "Problema con la petición Fetch de eliminar libro: " +
                response.statusText
        );
    }
    return await response.json();
};
