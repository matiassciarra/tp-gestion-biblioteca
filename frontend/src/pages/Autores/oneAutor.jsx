import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

export const OneAutor = () => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false); // Estado para el toggle

  const deleteHandler = () => {
    console.log('eliminado puto');
    setIsDeleted(true); // Mostrar el toggle
    setTimeout(() => {
      navigate(-1); // Redirigir a la página anterior después de un pequeño retraso
    }, 2000); // Puedes ajustar el tiempo según tus necesidades
  }

  const { id } = useParams();
  const { id_autor, nombre, apellido, biografia, fecha_nacimiento, url_imagen, id_pais, Pai } = useLoaderData();

  return (
    <>
      <article>
        <h1>{nombre} {apellido}</h1>
        <span>
          {fecha_nacimiento && (
            <div>Aca se ejecuta la fecha de nacimiento {fecha_nacimiento}</div>
          )}
        </span>
        <p>{biografia}</p>
        <span>
          {Pai && (
            <h4>Pais: {Pai.nombre}</h4>
          )}
        </span>
      </article>
      <button onClick={deleteHandler} className="btn btn-danger fw-bold">Eliminar usuario</button>
      <button onClick={() => navigate(-1)} className="btn btn-primary text-white fw-bold">Volver atras</button>
      //aca se le elimina el usuario si es exitoso
      {isDeleted && <div className="toggle-alert">¡Usuario eliminado!</div>} {/* El toggle */}
    </>
  )
}
