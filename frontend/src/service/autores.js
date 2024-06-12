export const URL = "http://localhost:3002/";
export const URL = "http://localhost:3002/";

export const getAllAutores = async () => {
    const response = await fetch(URL + "api/autores");
    const response = await fetch(URL + "api/autores");
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();
<<<<<<< HEAD
    return data;
};
export const getAutor = async (id) => {
    const response = await fetch(URL + `api/autores/${id}`);
=======
    return data
}
export const getAutor = async (id) => {
    const response = await fetch(URL+`api/autores/${id}`);
>>>>>>> 94a4caa116b64c2241645298692f95fc41971f38
>>>>>>> bac3718e07f3ecbd98056f737108509e7e4149b0
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();


    return data;
};
export const deleteAutor = async (id) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    const response = await fetch(URL + `api/autores/${id}`, options);
    if (!response.ok) {
        throw new Error(
            "Problema con la petición Fetch: " + response.statusText
        );
    }
    return await response.json();
};

export const createAutor = async (obj) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };
    const response = await fetch(URL + "api/autores", options);
    if (!response.ok) {
        throw new Error("Error al crear el autor");
    }
    const data = await response.json();

    return data;
};
