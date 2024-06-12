<<<<<<< HEAD
import { useParams, useLoaderData, useNavigate } from "react-router-dom";

export const OneAutor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const {
        id_autor,
        nombre,
        apellido,
        biografia,
        fecha_nacimiento,
        url_imagen,
        id_pais,
        Pai,
    } = useLoaderData();
    return (
        <>
            <article>
                <h1>
                    {nombre} {apellido}
                </h1>
                <span>
                    {fecha_nacimiento && (
                        <div>
                            Aca se ejecuta la fecha de nacimiento{" "}
                            {fecha_nacimiento}
                        </div>
                    )}
                </span>
                <p>{biografia}</p>
                <span>{Pai && <h4>Pais: {Pai.nombre}</h4>}</span>
            </article>
            <button
                onClick={() => navigate(-1)}
                className="btn bg-primary color-primary"
            >
                Volver atras
            </button>
        </>
    );
};
=======
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
>>>>>>> 94a4caa116b64c2241645298692f95fc41971f38
