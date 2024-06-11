import { useLoaderData } from "react-router-dom"
import '../../assets/generos/AllGeneros.css'
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";
import { deleteGenero } from "../../service/generos";

export const AllGeneros=()=>{
    const initialData =useLoaderData();
    const [generos, setGeneros] =useState(initialData)
    
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch =(e) =>{
        e.preventDefault();
        console.log("Buscando genero:", searchTerm);
    }
    const handlerDelete = async (id) => {
        try {
          // Llama a la API para eliminar el genero
          await deleteGenero(id);
          // Actualiza el estado filtrando el genero eliminado
          setGeneros(generos.filter(genero => genero.id_genero !== id));
          
        } catch (error) {
          console.error("Error al eliminar el genero:", error);
        }
      }
    return (
        
        <div className="conteiner-all-generos ">
            <div className="add-button-container mt-4">
                <button className="btn btn-success fw-bold">Agregar Género</button>
            </div>
        {/*Formulario para buscar generos */}
        <div className="search-container mt-4">
                <form onSubmit={handleSearch}>
                    <input 
                       type ='text'
                       className="form-control"
                       placeholder="Buscar Genero"
                       value={searchTerm}
                       onChange={(e)=>setSearchTerm(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary fw-bold mt-2">Buscar</button>
                </form>
            </div>
            {
                generos.map(({id_genero, nombre})=>(
                    <article className="card card-body" key={id_genero}>
                        <h1 className="card-title text-black">{nombre}</h1>
                        <div>
                            <button type='button' className="btn btn-primary card-link fw-bold">Editar</button>
                            <button type='button' onClick={() => handlerDelete(id_genero)} className="btn btn-danger  card-link fw-bold">Eliminar</button>
                        </div>

                    </article>
                    
                ))
            }
            
        </div>
    )
}