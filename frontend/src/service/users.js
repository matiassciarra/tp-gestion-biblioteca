export const getAllUsersRequest = async () => {
    const response = await fetch("http://localhost:3002/api/usuarios");
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
};

export const getUserByIdRequest = async (id) => {
    const response = await fetch(`http://localhost:3002/api/usuarios/${id}`);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return await response.json();
};
