
export const DetalleUsuario = ({ object })=> {
    const { nombre, apellido, username, correo, Pai, url } = object
    return (
      <article className="card cardSingleAutor">
        <h1 className="card-title placeholder-glow card-header widthMax">{nombre} {apellido}</h1>
          <ul className="card-body list-group list-group-flush widthMax">
            {url && (
              <li className="list-group-item">
                <img src={url} alt="userAvatar"></img>
              </li>
            )}

            {username && (
              <li className="list-group-item">
                <h4>UserName: {username}</h4>
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
              
          </ul>
      </article>
    )
  }
  