
export const cardAutor = ({ object })=> {
  const { nombre, apellido, biografia, fecha_nacimiento, url_imagen, Pai } = object
  return (
    <article className="card cardSingleAutor">
      {url_imagen?<img src={url_imagen} className="card-img-top imagen" alt="" />:null}
        
        <h1 className="card-title placeholder-glow card-header widthMax">{nombre} {apellido}</h1>
        <ul className="card-body list-group list-group-flush widthMax">
          {biografia && (<li className="list-group-item">
            <p>{biografia}</p>
          </li>)}
            {fecha_nacimiento && (
              <li className="list-group-item">
                    <h4>Fecha de nacimiento: {fecha_nacimiento}</h4>
              </li>
            
            )}
          
            {Pai && (
              <li className="list-group-item">
                <h4>Pais: {Pai.nombre}</h4>
              </li>

            )}
          
        </ul>
        </article>
  )
}
