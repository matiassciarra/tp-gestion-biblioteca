const URL ='http://localhost:3002/api/generos'

export const getAllGenero = async()=>{
    const res= await fetch(URL)
    return res.json()
}
export const deleteGenero = async (id) => {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await fetch(URL+`/${id}`, options);
    if (!response.ok) {
        throw new Error('Problema con la petición Fetch: ' + response.statusText);
    }
    return await response.json();
}