import { URL } from "./autores";

export const getAllLibros = async () => {
    const response = await fetch(`${URL}api/libros`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error al obtener libros");
    }
    const data = await response.json();
    return data;
};

export const getLibro = async (id) => {
    const response = await fetch(URL + `api/libros/${id}`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error al obtener libros");
    }
    const data = await response.json();
    return data;
};

export const getLibrosPorGenero = async (id_genero) => {
    const response = await fetch(
        `${URL}api/libros/generos?id_genero=${id_genero}`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error al obtener libros de ese genero");
    }
    const data = await response.json();
    return data;
};

export const getGeneros = async () => {
    const response = await fetch(`${URL}api/generos`, {
        credentials: 'include'
    });
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
        credentials: 'include'
    };
    const response = await fetch(URL + "api/libros", options);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
    return data;
};

export const deleteLibro = async (id) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include'
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

export const updateLibro = async (obj, idLibro) => {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        credentials: 'include'
    };
    const response = await fetch(URL + `api/libros/${idLibro}`, options);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
};

export const getLibrosPorTitulo = async (titulo) => {
    const response = await fetch(`${URL}api/libros/porTitulo?titulo=${titulo}`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error al obtener libros con ese titulo");
    }
    const data = await response.json();
    return data;
};
