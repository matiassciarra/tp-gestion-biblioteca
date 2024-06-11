import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FormAutor } from './FormAutor';

export const modalAutorCreate = ({bool,setBool, action=null}) =>{
  if(!action) action = setBool
  return (
    <Modal show={bool} onHide={setBool} centered>
        <Modal.Header closeButton>
          <Modal.Title>Añadir autor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/*TODO: aca va el formulario */}
          <FormAutor/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setBool(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>action()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
