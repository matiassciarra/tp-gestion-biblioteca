const URL = 'http://localhost:3002/'

export const getAllAutores = async () => {
    const response = await fetch(URL+"api/autores");
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();
    
    return data;
}

export const getAutor = async (id) => {
    const response = await fetch(URL+`api/autores/${id}`);
    if (!response.ok) {
        throw new Error("Error al obtener autores");
    }
    const data = await response.json();
    
    return data;
}
export const deleteAutor = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(URL+`api/autores/${id}`, options);
    if (!response.ok) {
        throw new Error('Problema con la petición Fetch: ' + response.statusText);
    }
    return await response.json();
}