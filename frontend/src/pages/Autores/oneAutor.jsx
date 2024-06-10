import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import {deleteAutor} from '../../service/autores';

import '../../assets/autores/cardSingleAutor.css'
export const OneAutor = () => {
  const navigate = useNavigate(); // Estado para el toggle
  
  const deleteHandler = async(id) => {
    await deleteAutor(id)
    setTimeout(() => {
      navigate(-1); // Redirigir a la página anterior después de un pequeño retraso
    }, 200); // Puedes ajustar el tiempo según tus necesidades
  }

  const { id } = useParams();
  const { id_autor, nombre, apellido, biografia, fecha_nacimiento, url_imagen, id_pais, Pai } = useLoaderData();

  return (
    <>
      <article className="card cardSingleAutor">
        <h1 className="card-title placeholder-glow card-header widthMax">{nombre} {apellido}</h1>
        <ul className="card-body list-group list-group-flush widthMax">
          <li className="list-group-item">
            <p>{biografia}</p>
          </li>
            {fecha_nacimiento && (
              <li className="list-group-item">

                    <div>Aca se ejecuta la fecha de nacimiento {fecha_nacimiento}</div>
              </li>
            
            )}
          
            {Pai && (
              <li className="list-group-item">
                <h4>Pais: {Pai.nombre}</h4>
              </li>

            )}
          <li className="list-group-item">
            <button onClick={() => navigate(-1)} className="btn btn-primary text-white fw-bold card-link">Volver atras</button>
            <button onClick={() => navigate(-1)} className="btn btn-warning text-white fw-bold card-link">Volver atras</button>
            <button onClick={()=>deleteHandler(id_autor)} className="btn btn-danger fw-bold card-link">Eliminar usuario</button>
          </li>
          
          
        </ul>
        
        
      </article>
      
    </>
  )
}
