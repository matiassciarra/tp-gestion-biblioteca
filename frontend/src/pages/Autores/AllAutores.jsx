import {useLoaderData, Link} from 'react-router-dom';
import { useState } from 'react';
import '../../assets/autores/autoresAll.css';
import {deleteAutor} from '../../service/autores';
import { modalAutorCreate as Modal } from '../../components/autor/modalAutorCreate';

export const AllAutores = () => {
  const res = useLoaderData();
  const [data, setData] = useState(res);
  const [showModal, setShowModal] = useState(false);

  const AccionCreate = () =>{
    setShowModal(false)
  }

  // Función para eliminar usuario
  const handlerDelete = async (id) => {
    try {
      // Llama a la API para eliminar el autor
      await deleteAutor(id);
      // Actualiza el estado filtrando el autor eliminado
      const newData = data.filter(autor => autor.id_autor !== id);
      setData(newData);
    } catch (error) {
      console.error("Error al eliminar el autor:", error);
    }
  }

  return (
    <>
    <h1 className="tituloMain">Autores</h1>
      <button
        type="button"
        className="btn btn-success text-white fw-bold"
        onClick={() => setShowModal(true)}
      >
        Nuevo Autor
      </button>
      <article className='containerAutores'>
        {
          data.map(({id_autor, nombre, apellido, biografia}) => (
            <div key={id_autor} className="card card-body">
              <h1 className='card-title'>{nombre} {apellido}</h1>
              <div className=''>
                <h3>{biografia}</h3>
                <ul className='list-group list-group-flush accionAutores'>
                  <li className="list-group-item">
                    <Link to={`${id_autor}`} className='card-link'>
                      <button type="button" className="btn btn-outline-primary">Ver</button>
                    </Link>
                    <button type="button" className="btn btn-outline-warning card-link fw-bold">Modificar</button>
                    <button type="button" onClick={() => handlerDelete(id_autor)} className="btn btn-outline-danger card-link fw-bold">Eliminar</button>
                  </li>
                </ul>
              </div>
            </div>
          ))
        }
      </article>
      <Modal bool={showModal} setBool={setShowModal} action={AccionCreate}/>
    </>
  )
}

