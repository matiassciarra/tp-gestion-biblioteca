const URL ='http://localhost:3002/api/paises'

export const getPaises = async() => {
    const response = await fetch(URL);
    if (!response.ok) {
        throw new Error("Error al obtener los países");
    }
    const data = await response.json();

    return data;
}