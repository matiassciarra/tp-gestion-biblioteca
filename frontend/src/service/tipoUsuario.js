const URL ='http://localhost:3002/api/tipoUsuarios'

export const getTipoUsuarios = async() => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Error al obtener los tipos de usuario");
    }
    const data = await response.json();

    return data;
}