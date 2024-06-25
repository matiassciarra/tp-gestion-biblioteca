
export const DetalleUsuario = ({ object })=> {
    const { nombre, apellido, username, correo, url_imagen, Pai, url } = object
    return (
      <article className="card cardSingleAutor">
        {url_imagen?<img src={url_imagen} className="card-img-top imagen" alt="" />:null}
          
          <h1 className="card-title placeholder-glow card-header widthMax">{nombre} {apellido}</h1>
          <ul className="card-body list-group list-group-flush widthMax">
            {username && (<li className="list-group-item">
              <p>{username}</p>
            </li>)}
              {correo && (
                <li className="list-group-item">
                      <h4>Email: {correo}</h4>
                </li>
              
              )}
            
              {Pai && (
                <li className="list-group-item">
                  <h4>País: {Pai.nombre}</h4>
                </li>
  
              )}

              {url && (
                <li className="list-group-item">
                    <h4>URL: {url}</h4>
                </li>
              )}
            
          </ul>
          </article>
    )
  }
  