export const URL = "http://localhost:3002/";

export const getAllAutores = async () => {
    const response = await fetch(URL + "api/autores", {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();
    return data;
};

export const getAutor = async (id) => {
    const response = await fetch(URL + `api/autores/${id}`, {
        credentials: 'include'
    });
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
        credentials: 'include'
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
        credentials: 'include'
    };
    const response = await fetch(URL + "api/autores", options);
    const data = await response.json();
    if (!response.ok) {
        throw new Error("Error al crear el autor");
    }
    return data;
};

export const updateAutor = async (id, obj) => {
    const options = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
        credentials: 'include'
    };
    try {
        const response = await fetch(`${URL}api/autores/${id}`, options);
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Error updating author');
        }
        return data;
    } catch (error) {
        // Handle network errors
        console.error('Network error:', error);
        throw new Error(error.message || 'Network error occurred');
    }
}