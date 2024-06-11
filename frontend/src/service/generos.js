const URL ='http://localhost:3002/api/generos'

export const getAllGenero = async()=>{
    const res= await fetch(URL)
    return res.json()
}