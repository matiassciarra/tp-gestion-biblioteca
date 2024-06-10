import {useLoaderData, Link} from 'react-router-dom'
import { useState } from 'react';
import '../../assets/autores/autoresAll.css'
export const AllAutores = () => {
  const res = useLoaderData();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <article className='containerAutores'>
      {
      res.map(({id_autor,nombre,apellido,biografia})=>(
        <div key={id_autor} class="card card-body">
          <h1 className='card-title'>{nombre} {apellido}</h1>
          <div className=''>
          <h3>{biografia}</h3>
          <ul className='list-group list-group-flush accionAutores'>
            <li className="list-group-item">
              <Link to={`${id_autor}`} className='card-link'>
                <button type="button" class="btn btn-outline-primary">Primary</button>
              </Link>
              <button type="button" class="btn btn-outline-warning card-link fw-bold">Modificar</button>
              <button type="button" class="btn btn-outline-danger card-link fw-bold">Eliminar</button>
              
            </li>
          </ul>
          
          </div>
        </div>
      ))
      }
    </article> 

    
    
    </>
  )
}
