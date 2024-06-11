export const URL = "http://localhost:3002/";

export const getAllAutores = async () => {
    const response = await fetch(URL + "api/autores");
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();

    return data;
};

export const getAutor = async (id) => {
    const response = await fetch(URL + `api/autores/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();

    return data;
};
