import Modal from 'react-bootstrap/Modal';
import { FormAutor } from './FormAutor';

export const modalAutorCreate = ({bool,setBool, action=null}) =>{
  if(!action) action = setBool
  const res = (data) =>{
    const res = action(data)
    if (res){
      setBool(false)
    }
  }
  return (
    <Modal show={bool} onHide={setBool} centered>
        <Modal.Header closeButton>
          <Modal.Title>Añadir autor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*TODO: aca va el formulario */}
          <FormAutor action={res}/>
        </Modal.Body>
      </Modal>
  )
}
