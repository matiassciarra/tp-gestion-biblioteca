const url = "http://localhost:3002/api/prestamos";
export const postPrestamoRequest = async (datosPrestamo) => {
     // Cambiar por la URL real del servidor
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosPrestamo),
        credentials: "include",
    };

    try {
        const response = await fetch(url, requestOptions);
        if (!response.ok) {
            throw new Error("Error en la solicitud de préstamo");
        }
        const data = await response.json();
        return data; // Manejar la respuesta según sea necesario
    } catch (error) {
        console.error("Error al enviar la solicitud de préstamo:", error);
        throw error; // O manejar el error de manera más específica
    }
};
export const getPrestamos = async (id) => {
    const response = await fetch(url , {
        credentials: 'include'
    });
    if (!response.ok) {
        throw new Error("Error al obtener prestamos");
    }
    const data = await response.json();
    return data;
};