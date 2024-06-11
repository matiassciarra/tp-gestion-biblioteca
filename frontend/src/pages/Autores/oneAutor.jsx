import { useLoaderData, useNavigate,  } from "react-router-dom";
import {deleteAutor} from '../../service/autores';
import { cardAutor as CardAutor } from "../../components/autor/cardAutor.jsx";
import '../../assets/autores/cardSingleAutor.css'
export const OneAutor = () => {
  const navigate = useNavigate(); // Estado para el toggle
  
  const deleteHandler = async(id) => {
    await deleteAutor(id)
    setTimeout(() => {
      navigate(-1); // Redirigir a la página anterior después de un pequeño retraso
    }, 200); // Puedes ajustar el tiempo según tus necesidades
  }
  const { id_autor, nombre, apellido, biografia, fecha_nacimiento, url_imagen, Pai } = useLoaderData();
  console.log(url_imagen);
  return (
    <section className="sectionCard">
      <div className="info">
      <span className="accion">
            <button onClick={() => navigate(-1)} className="btn btn-primary text-white fw-bold ">Volver atras</button>
            <button onClick={() => {}} className="btn btn-warning text-white fw-bold ">Modificar</button>
            <button onClick={()=>deleteHandler(id_autor)} className="btn btn-danger fw-bold ">Eliminar usuario</button>
      </span>
      <CardAutor object={{ id_autor, nombre, apellido, biografia, fecha_nacimiento, url_imagen, Pai }}/>
      </div>
      <div className="peliculas">

      </div>
    
    </section>
  )
}
