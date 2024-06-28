export const URL = "http://localhost:3002/api/";

export const getAllUsuarios = async () => {
    const response = await fetch(URL + 'usuarios', {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
    }
    const data = await response.json();
    return data;
};

export const getUsuario = async (id) => {
    const response = await fetch(URL + `usuarios/${id}`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Error al obtener el usuario');
    }
    const data = await response.json();
    return data;
};

export const deleteUsuario = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include'
    };
    const response = await fetch(URL + `usuarios/${id}`, options);
    if (!response.ok) {
        throw new Error(
            'Problema con la petición Fetch: ' + response.statusText
        );
    }
    return await response.json();
};

export const createUsuario = async (obj) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
        credentials: 'include'
    };
    const response = await fetch(URL + 'usuarios', options);
    if (!response.ok) {
        throw new Error('Error al crear el usuario');
    }
    const data = await response.json();
    return data;
};

export const updateUsuario = async (obj, idUsuario) => {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
        credentials: 'include'
    };
    const response = await fetch(URL + `usuarios/${idUsuario}`, options);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
};


export const getUsuarioMe = async () => {
    const response = await fetch(URL + `usuarios/me`, {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error('Error al obtener el usuario');
    }
    const data = await response.json();
    return data;
};

export const updateUsuarioMe = async (obj) => {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
        credentials: 'include'
    };
    const response = await fetch(URL + `usuarios/me`, options);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.message);
    }
};