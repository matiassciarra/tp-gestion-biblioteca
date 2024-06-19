const URL = 'http://localhost:3002/api/generos';

export const getAllGenero = async () => {
    const res = await fetch(URL);
    return res.json();
};

export const deleteGenero = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const response = await fetch(`${URL}/${id}`, options);
    if (!response.ok) {
        throw new Error('Problema con la petición Fetch: ' + response.statusText);
    }
    return await response.json();
};

export const getGenero = async (id) => {
    const response = await fetch(`${URL}/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener géneros");
    }
    const data = await response.json();
    return data;
};

export const createGenero = async (obj) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
    };
    const response = await fetch(URL , options);
    if (!response.ok) {
        throw new Error("Error al crear el genero");
    }
    const data = await response.json();

    return data;
};