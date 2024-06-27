const url = "http://localhost:3002/api/prestamos";

export const postPrestamoRequest = async (datosPrestamo) => {
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
        return data;
    } catch (error) {
        console.error("Error al enviar la solicitud de préstamo:", error);
        throw error;
    }
};

export const getPrestamos = async (id) => {
    const response = await fetch(url, {
        credentials: "include",
    });
    if (!response.ok) {
        throw new Error("Error al obtener prestamos");
    }
    const data = await response.json();
    return data;
};

export const devolverPrestamoRequest = async (id) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
    };

    try {
        const response = await fetch(`${url}/${id}`, requestOptions);
        const data = await response.json();
        if (!response.ok) {
            console.log(data.message);
            throw new Error({ error: data.message });
        }

        return data;
    } catch (error) {
        console.error("Error al devolver el préstamo:", error);
        throw error;
    }
};
