const URL = "http://localhost:3002/api/paises";

export const getPaises = async () => {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los países:", error);
        // Aquí puedes decidir cómo manejar el error, por ejemplo, retornando un valor predeterminado o re-lanzando el error.
        throw error;
    }
};
