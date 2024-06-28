import Modal from 'react-bootstrap/Modal';
import { FormAutor } from './FormAutor';

export const modalAutorCreate = ({bool,setBool, action=null, idAutor = null}) =>{
  if(!action) action = setBool
  const res = (data) =>{
    if (!idAutor){
      action(data)
    }else{
      action(idAutor,data)
    }
    setBool(false)
  }
  return (
    <Modal show={bool} onHide={setBool} centered>
        <Modal.Header closeButton>
          <Modal.Title>Añadir autor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*TODO: aca va el formulario */}
          <FormAutor action={res} idAutor={idAutor}/>
        </Modal.Body>
      </Modal>
  )
}
